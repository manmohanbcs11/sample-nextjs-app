import Link from 'next/link'
import React from 'react'

export default function BlogInterceptor() {
  return (
    <div>
      <h1>This is blog interceptor.</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/about/ourself'>Ourself</Link>
    </div>
  )
}
