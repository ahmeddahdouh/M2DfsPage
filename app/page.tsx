"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import Image from "next/image"

interface Student {
  id: string
  name: string
  flag: string
  image: string
}

export default function HomePage() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data.students))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Coding Class Team
              </h1>
            </div>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-100 after:transition-transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                About
              </Link>
              <Link
                href="/profile/dahdouh-ahmed"
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                My Profile
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>21 Talented Developers</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Meet Our Talented Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A diverse group of passionate developers from around the world, united by their love for coding and
            innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {students.map((student, index) => (
            <Link key={student.id} href={`/profile/${student.id}`}>
              <Card
                className="group relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer bg-card h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="aspect-square relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center h-20 flex items-center justify-center">
                    <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-relaxed">
                      {student.name}
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/50 mt-24 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Coding Class Team
            </span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 • Built with passion and innovation</p>
        </div>
      </footer>
    </div>
  )
}
