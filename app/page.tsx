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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-pulse" />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                M2<span className="text-primary">DFS</span>
              </h1>
            </div>
            <div className="hidden flex-col items-end md:flex">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 leading-none mb-1">
                Université de Corse
              </span>
              <div className="flex gap-10">
                {[
                  { label: "Home", href: "/", active: true },
                  { label: "About", href: "/about" },
                  { label: "My Profile", href: "/profile/dahdouh-ahmed" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-bold transition-all duration-300 relative py-2 ${item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                    {item.active && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span>Premium Talent Hub</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-black mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <span className="bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              Elevate Your
            </span>{" "}
            <br />
            <span className="text-primary text-glow">Expectations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Experience the future of development with 21 elite creators pushing the boundaries of what's possible in the digital realm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {students.map((student, index) => (
            <Link key={student.id} href={`/profile/${student.id}`} className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 50}ms` }}>
              <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border-border/40 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 h-full">
                <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                  <Image
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      View Profile
                    </span>
                    <h4 className="text-white font-black text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      {student.name.split(' ')[0]}
                    </h4>
                  </div>
                </div>
                <div className="p-6 border-t border-border/40">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {student.name}
                    </h3>
                    <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{student.flag}</span>
                  </div>
                  <div className="w-full h-1 bg-border/20 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-primary transition-all duration-1000" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/40 py-16 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground/60 max-w-sm">
              M2DFS • Master 2 Développement Full Stack
              <br />
              Université de Corse Pasquale Paoli
            </p>
            <div className="h-px w-24 bg-primary/20" />
            <span className="text-xs font-black uppercase tracking-tighter text-muted-foreground/40">
              © 2025 ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
