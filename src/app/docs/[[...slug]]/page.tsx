import Link from "next/link"

interface DocsProps {
  params: {
    slug: string[]
  }
}

export default function Docs({ params }: DocsProps) {
  if (params.slug?.length === 2) {
    return (
      <>
        <Link href='/'>Home</Link>
        <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
      </>
    )
  } else if (params.slug?.length === 1) {
    return (
      <>
        <Link href='/'>Home</Link>
        <h1>Viewing docs for feature {params.slug[0]}</h1>
      </>
    )
  } else {
    return (
      <>
        <Link href='/'>Home</Link>
        <h1>Docs home page</h1>
      </>
    )
  }

}
