"use client"

import { Button } from "@/components/Button"

export default function Error ({
  error,
  reset
} : {
  error: Error & {digest?: string},
  reset: () => void
}) {
  console.log(error)
  console.log(reset)
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Button onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}