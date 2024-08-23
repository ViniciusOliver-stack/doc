"use client"

import { Header } from "@/components/ui/Header"
import { UserButton, useUser, useClerk } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  function hasValidDomain(email: string | null): boolean {
    return email ? email.endsWith("@melius.software") : false
  }

  useEffect(() => {
    if (user && !hasValidDomain(user.emailAddresses[0]?.emailAddress)) {
      // Fazer logout e redirecionar
      signOut()
      router.push("/")
    }
  }, [user, signOut, router])

  return (
    <div className="min-h-14 border-b border-neutral-700 p-4 px-10">
      <div className="m-auto flex w-[80%] items-center justify-between gap-6">
        <Header />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
              footer: "none",
            },
          }}
        />
      </div>
    </div>
  )
}
