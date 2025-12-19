"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Award, Lightbulb, TrendingUp, Smile } from "lucide-react"
import Image from "next/image"

interface Student {
  id: string
  name: string
  age: number
  birthplace: string
  nationality: string
  flag: string
  image: string
  strengths: string
  weaknesses: string
  achievement: string
  funFact: string
  description?: string
}

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.students.find((s: Student) => s.id === params.id)
        setStudent(found || null)
      })
  }, [params.id])

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="group gap-3 font-bold hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Side Panel: Profile Image & Basic Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="relative group">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-card shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-colors duration-500 -z-10" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{student.flag}</span>
                <h1 className="text-4xl font-black tracking-tighter leading-none">
                  {student.name}
                </h1>
              </div>
              <p className="text-xl font-medium text-primary/80">
                {student.nationality} Full Stack Artisan
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 rounded-2xl bg-card border border-border/40 flex items-center gap-2 shadow-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{student.age} Years</span>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-card border border-border/40 flex items-center gap-2 shadow-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold">{student.birthplace.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="space-y-8">
            {student.description && (
              <div className="relative animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Biography
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed font-medium bg-card/40 p-8 rounded-[2rem] border border-border/40 backdrop-blur-sm">
                  {student.description}
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="p-8 rounded-[2rem] bg-card/40 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-colors group">
                <TrendingUp className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-3">
                  Core Expertise
                </h3>
                <p className="font-bold text-foreground leading-relaxed">
                  {student.strengths}
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-card/40 border border-border/40 backdrop-blur-sm hover:border-accent/40 transition-colors group">
                <Lightbulb className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-3">
                  Learning Path
                </h3>
                <p className="font-bold text-foreground leading-relaxed">
                  {student.weaknesses}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xl shadow-primary/5 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-primary">
                  Masterpiece Achievement
                </h3>
              </div>
              <p className="text-xl font-bold text-foreground/90 leading-tight">
                "{student.achievement}"
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 shadow-xl shadow-accent/5 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <Smile className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-accent">
                  Beyond the Code
                </h3>
              </div>
              <p className="text-xl font-bold text-foreground/90 leading-tight">
                {student.funFact}
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 mt-24 py-12 bg-card/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-muted-foreground/50 tracking-widest uppercase">
            M2DFS • Université de Corse • 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
