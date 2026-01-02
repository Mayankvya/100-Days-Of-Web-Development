import type React from "react"
import { cn } from "@/lib/utils"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center p-4">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

      {/* Glass Card */}
      <div className="relative w-full max-w-md">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl",
            "before:absolute before:inset-0 before:bg-noise before:opacity-[0.03] before:pointer-events-none",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
