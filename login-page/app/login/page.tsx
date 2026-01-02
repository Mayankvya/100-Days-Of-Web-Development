import Link from "next/link"
import { AuthLayout } from "@/components/auth-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/70">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-white/70">
                Password
              </Label>
              <Link href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              className="bg-white/5 border-white/10 text-white focus:ring-primary/50"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 py-6 rounded-xl">
            Github
          </Button>
          <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 py-6 rounded-xl">
            Google
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
