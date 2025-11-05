"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Code2, Users, Rocket, Heart, Sparkles } from "lucide-react"

export default function AboutPage() {
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
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-100 after:transition-transform"
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

      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              About Our Coding Class
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A community of passionate developers learning, growing, and building together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="group p-10 border-2 border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To empower developers with cutting-edge skills and foster a collaborative environment where innovation
              thrives. We believe in learning by doing and supporting each other's growth.
            </p>
          </Card>

          <Card className="group p-10 border-2 border-border bg-card hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Diverse Team</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our class brings together 21 talented developers from 10+ countries, each bringing unique perspectives and
              expertise to create a rich learning environment.
            </p>
          </Card>

          <Card className="group p-10 border-2 border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Innovation First</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We focus on modern technologies and best practices, from AI and machine learning to cloud computing and
              full-stack development, preparing for the future of tech.
            </p>
          </Card>

          <Card className="group p-10 border-2 border-border bg-card hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Heart className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Community Driven</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Beyond coding, we're a community that supports each other, shares knowledge, and celebrates successes
              together. Every member contributes to our collective growth.
            </p>
          </Card>
        </div>

        <Card className="p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Technologies We Master</span>
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-8">What We're Learning</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "React",
                "Node.js",
                "Python",
                "TypeScript",
                "Docker",
                "AWS",
                "Machine Learning",
                "PostgreSQL",
                "MongoDB",
                "FastAPI",
                "Flutter",
                "DevOps",
                "Kubernetes",
                "Spring Boot",
                "Vue.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-card border-2 border-border rounded-xl text-base font-semibold text-foreground hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
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
