import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; // Evita múltiplas instâncias no Next.js

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
