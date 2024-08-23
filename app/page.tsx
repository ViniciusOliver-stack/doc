"use client"

import { SignedOut, SignIn, useAuth, UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  const { user } = useUser()

  console.log(user)

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/")
    } else {
      router.push("/home")
    }
  }, [isSignedIn, router])

  return (
    <header className="flex items-center justify-center h-screen w-full">
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
    </header>
  )
}
