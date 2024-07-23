import { TRPCClientError } from "@trpc/client";
import { hash } from "bcrypt";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const RegistrationRouter = createTRPCRouter({
  
  createClerk : publicProcedure.input(z.object({
    email:z.string(),
    password:z.string()
  }))
  .mutation(async ({ctx,input})=>{
      try {

        const hashedPassword = await hash(input.password,13)
        await ctx.db.user.create({
          data:{
            email:input.email,
            password:hashedPassword,
            role: 'CLERK'
          }
        })
      } catch (error) {

        if(error instanceof TRPCClientError){
          console.error(error.message)
          throw new Error(error.message)
        }
        console.error(error)
        throw new Error("Something went wrong")
      }
  })
});
