import { db } from "@/lib/db";  // 🔹 Conexão com Prisma

export async function GET() {
  try {
    const contatos = await db.contato.findMany();  // 🔹 Buscar todos os contatos
    return new Response(JSON.stringify(contatos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao conectar ao banco" }), { status: 500 });
  }
}
