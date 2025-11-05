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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to main page
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="overflow-hidden border-2 border-border bg-card shadow-2xl">
          <div className="relative bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <div className="relative z-10">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl ring-8 ring-card/50 animate-float">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-3 text-balance">{student.name}</h1>
              <h1 className="text-5xl font-bold text-foreground mb-3 text-balance">{student.flag}</h1>
              <p className="text-xl text-muted-foreground font-medium">{student.nationality} Developer</p>
            </div>
          </div>

          <div className="p-10 space-y-8">
            {student.description && (
              <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
                <p className="text-lg text-foreground leading-relaxed">{student.description}</p>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-border bg-gradient-to-br from-card to-primary/5 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Age</h3>
                    <p className="text-2xl font-bold text-foreground">{student.age} years old</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border bg-gradient-to-br from-card to-accent/5 hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">
                      Place of Birth
                    </h3>
                    <p className="text-2xl font-bold text-foreground">{student.birthplace}</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border-2 border-border bg-gradient-to-br from-card to-primary/5 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wide mb-3">Coding Strengths</h3>
                  <p className="text-lg text-foreground leading-relaxed">{student.strengths}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-border bg-gradient-to-br from-card to-accent/5 hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-accent uppercase tracking-wide mb-3">Areas for Growth</h3>
                  <p className="text-lg text-foreground leading-relaxed">{student.weaknesses}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wide mb-3">Biggest Achievement</h3>
                  <p className="text-lg text-foreground leading-relaxed font-medium">{student.achievement}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Smile className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-accent uppercase tracking-wide mb-3">Fun Fact</h3>
                  <p className="text-lg text-foreground leading-relaxed font-medium">{student.funFact}</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </main>

      <footer className="border-t border-border/50 mt-24 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-muted-foreground">Coding Class Team © 2025 • Built with passion and innovation</p>
        </div>
      </footer>
    </div>
  )
}
