import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { prompt, model } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "명령어가 필요합니다." }, { status: 400 })
    }

    // 기본값으로 DALL-E 3 사용
    const modelToUse = model === "dall-e-2" ? "dall-e-2" : "dall-e-3"

    const response = await openai.images.generate({
      model: modelToUse,
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })

    return NextResponse.json({ url: response.data[0].url })
  } catch (error) {
    console.error("이미지 생성 오류:", error)
    return NextResponse.json({ error: "이미지 생성 중 오류가 발생했습니다." }, { status: 500 })
  }
}
