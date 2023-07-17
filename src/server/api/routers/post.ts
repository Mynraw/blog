import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.post.findUnique({ where: { id: input } })
    })
});
