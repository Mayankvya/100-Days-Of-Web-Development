import Link from "next/link"
import { AuthLayout } from "@/components/auth-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">Create account</h1>
          <p className="text-sm text-muted-foreground">Join us and start your journey today</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className="text-white/70">
                First Name
              </Label>
              <Input
                id="first-name"
                placeholder="John"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className="text-white/70">
                Last Name
              </Label>
              <Input
                id="last-name"
                placeholder="Doe"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/70">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white/70">
              Password
            </Label>
            <Input id="password" type="password" className="bg-white/5 border-white/10 text-white" />
          </div>
          <Button className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
