import { PrismaClient  } from "@prisma/client/extension";

// @ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") {
    // @ts-ignore
    globalThis.prisma = prisma
}

export default prisma