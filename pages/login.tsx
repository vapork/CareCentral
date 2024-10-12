'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader } from 'lucide-react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-md rounded-lg">
        <CardHeader className="space-y-1 p-4">
          <CardTitle className="text-2xl font-bold text-center">Login to Your Account</CardTitle>
          <CardDescription className="text-center text-gray-600">
            {/* Alternative message without unescaped characters */}
            Please ensure all inputs are correctly formatted.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 p-4">
          <div className="text-sm text-center">
            <Link className="hover:underline text-blue-500" href="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <div className="text-sm text-center">
            Dont have an account?{' '}
            <Link className="hover:underline text-blue-500" href="/signup">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
