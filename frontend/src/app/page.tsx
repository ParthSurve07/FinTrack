import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  PieChart,
  Smartphone,
  ArrowRight,
  Activity,
  ArrowBigRight,
  MoveRight
} from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">FinTrack</span>
            </div>
            <div className="flex items-center gap-4">
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge className="mb-4" variant="secondary">
            Personal Finance Made Simple
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Take Control of Your Financial Future
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track expenses, monitor investments, and achieve your financial goals with our comprehensive personal finance platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-in">
              <Button>
                Get Started
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The rest of your landing page content remains the same */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage your finances
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools to track, analyze, and optimize your financial life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Portfolio Tracking</CardTitle>
              <CardDescription>
                Monitor your investments and asset allocation in real-time with detailed analytics.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>Mobile Ready</CardTitle>
              <CardDescription>
                Access your finances anywhere with our responsive web app and mobile interface.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle>Real-time Updates</CardTitle>
              <CardDescription>
                Get instant notifications and live market data to make informed decisions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-semibold">FinTrack</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 FinTrack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}