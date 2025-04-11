"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ModelSelector } from "./model-selector"

export function CatGenerator() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [selectedModel, setSelectedModel] = useState("dall-e-3")

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("명령어를 입력해주세요.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `고양이: ${prompt}`,
          model: selectedModel,
        }),
      })

      if (!response.ok) {
        throw new Error("이미지 생성에 실패했습니다.")
      }

      const data = await response.json()
      setImageUrl(data.url)
    } catch (err) {
      setError("이미지 생성 중 오류가 발생했습니다. 다시 시도해주세요.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Textarea
            placeholder="고양이를 그리기 위한 명령어를 입력하세요. 예: '우주복을 입은 고양이', '선글라스를 쓴 고양이'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[150px] resize-none"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <div className="flex items-center justify-between">
          <ModelSelector selectedModel={selectedModel} onModelChange={setSelectedModel} />
          <Button onClick={generateImage} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                생성 중...
              </>
            ) : (
              "고양이 생성하기"
            )}
          </Button>
        </div>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0 aspect-square flex items-center justify-center bg-muted">
          {imageUrl ? (
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="생성된 고양이 이미지"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center p-4 text-muted-foreground">
              명령어를 입력하고 '고양이 생성하기' 버튼을 클릭하세요.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
