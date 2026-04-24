import { Anthropic } from "@anthropic-ai/sdk";
import { ARCHITECT_SYSTEM_PROMPT } from "@/lib/ai/prompts";
import { NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Anthropic API key not configured" },
        { status: 500 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      system: ARCHITECT_SYSTEM_PROMPT,
      messages: messages.map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      })),
    });

    // Handle the content properly
    const textContent = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ 
      role: "assistant", 
      content: textContent 
    });
  } catch (error: any) {
    console.error("Claude API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from Claude" },
      { status: 500 }
    );
  }
}
