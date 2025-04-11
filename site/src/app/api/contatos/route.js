import { db } from "@/lib/db";  // Conexão com o Prisma

export async function POST(req) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    if (!nome || !email || !mensagem || !telefone) {
      return new Response(JSON.stringify({ error: "Todos os campos são obrigatórios" }), { status: 400 });
    }

    const novoContato = await db.contato.create({
      data: { nome, email, telefone, mensagem },
    });

    return new Response(JSON.stringify(novoContato), { status: 201 });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error); // 🔹 Adiciona logs para debug
    return new Response(JSON.stringify({ error: "Erro interno no servidor" }), { status: 500 });
  }
}
