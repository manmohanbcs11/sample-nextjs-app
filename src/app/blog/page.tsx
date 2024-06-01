import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog'
}

export default function Page() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h2>Default Blog</h2>
      <p>This is blog page with default layout</p>
    </div>
  )
}
