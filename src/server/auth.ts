import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";

import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db } from "~/server/db";
import { TRPCClientError } from "@trpc/client";
import { randomUUID } from "crypto";
import { type Role } from "@prisma/client";

declare module "next-auth" {

  interface Session extends DefaultSession, User {
    user: {
      id: string
      role: Role
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user, token }) {
      const { email, role } = token;
      return {
        ...session,
        user: {
          ...session.user,
          email: email,
          role: role,
        },
      };
    },
    jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.role = user.role
        return token
      }
      return token
    },
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/", },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Abdul Rehman" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {

          if (!credentials?.email || !credentials?.password) return null;

          const userInfo: {
            userId: string;
            email: string;
            password: string;
            role: Role;
          } | null = await db.user.findUnique({ where: { email: credentials.email } })

          if (!userInfo)
            throw new TRPCClientError("User not found.")

          const result: boolean = await compare(credentials.password, userInfo.password)

          if (!result)
            throw new TRPCClientError("Password didn't match.");

          return {
            id: randomUUID.toString(),
            email: userInfo.email,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            role: userInfo.role,
          }
        } catch (error) {
          if (error instanceof TRPCClientError)
            return null
          return null
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
