import Link from "next/link"

export const metadata = {
  title: 'About - Next.js',
  description: 'Generated only for about page',
}

export default function About() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h2>about page</h2>
      <Link href='/about/myself'>Myself</Link>
      <Link href='/about/yourself'>Yourself</Link>
      <Link href='/about/ourself'>Ourself</Link>
    </div>
  )
}
