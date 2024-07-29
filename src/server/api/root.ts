import { RegistrationRouter } from "~/server/api/routers/registration";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { ClassRouter } from "./routers/class";
import { StudentRouter } from "./routers/student";


export const appRouter = createTRPCRouter({
  register: RegistrationRouter,
  class: ClassRouter,
  student:StudentRouter
});


// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
