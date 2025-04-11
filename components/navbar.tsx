"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/components/logo.png"
// 예시로 react-icons/fa의 FaCat 아이콘 사용
import { FaCat } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-24 items-center justify-between">
        {/* 왼쪽: 로고 */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 h-full">
            <Image src={logo} alt="로고" width={70} height={70} />
            <span className="font-bold leading-none flex items-center h-full">aistudio_cat</span>
          </Link>
             <Button variant="ghost" size="sm">
                구독하기
             </Button>
             <Button variant="ghost" size="sm">
                사용자
             </Button>
             {/* 다크모드 전환 버튼 */}
             <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
