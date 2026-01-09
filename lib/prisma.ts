import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL!, // Uses direct MongoDB for migrations
    },
  },
}).$extends(withAccelerate());

export { prisma }