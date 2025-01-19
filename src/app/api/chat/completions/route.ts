import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    // モデルとメッセージをリクエストボディから取得する。
    const { model, messages } = await req.json();
    // Open AI のAPIを呼び出す。
    const completion = await openai.chat.completions.create({
      model,
      messages,
    });

    return NextResponse.json(completion);
  } catch (error: any) {
    console.error("Error in /chat/completions:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
