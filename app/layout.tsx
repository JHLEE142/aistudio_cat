import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "next-themes"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "aistudio_comet",
  description: "AI를 이용해 다양한 고양이 이미지를 생성해보세요!"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        {/* next-themes ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 전체 페이지가 세로로 이어지는 레이아웃 */}
          <div className="flex flex-col min-h-screen bg-background text-foreground">


            {/* 실제 메인 컨텐츠 영역 */}
            <main className="flex-1 container py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
