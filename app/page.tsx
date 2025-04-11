import { Navbar } from "@/components/navbar"
import { CatGenerator } from "@/components/cat-generator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">AI 고양이 생성기</h1>
          <p className="text-muted-foreground mt-2">AI를 이용해 다양한 고양이 이미지를 생성해보세요!</p>
        </div>
        <CatGenerator />
      </main>
    </div>
  )
}
