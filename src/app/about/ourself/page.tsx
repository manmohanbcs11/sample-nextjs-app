import Link from "next/link";

export default function Ourself() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>This is about ourself.</h1>
      <Link href='/about/yourself'>Yourself</Link>
    </div>
  )
}
