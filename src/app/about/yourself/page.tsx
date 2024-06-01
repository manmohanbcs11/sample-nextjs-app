import Link from "next/link";

export default function Yourself() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>This is about Yourself.</h1>
      <Link href='/about/ourself'>Ourself</Link>
    </div>
  )
}
