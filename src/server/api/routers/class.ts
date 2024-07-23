import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";





export const ClassRouter = createTRPCRouter({

    getClasses: publicProcedure.query(async ({ ctx }) => {
        try {
            const classes: ClassProps[] = await ctx.db.class.findMany()
            return classes
        } catch (error) {
            if (error instanceof TRPCClientError) {
                console.error(error.message)
                throw new Error(error.message)
            }
            console.error(error)
            throw new Error("Something went wrong.")
        }
    }),

    createClass: publicProcedure
        .input(z.object({
            className: z.string(),
            classSlug: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            try {   

                await ctx.db.class.create({
                    data:{
                        className:input.className,
                        classSlug:input.classSlug
                    }
                })
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: error.message })
                }
                console.error(error)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: "Something went wrong."})
            }
        })
})