import Link from 'next/link'
import React from 'react'

export default function ProductList () {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <Link href='/products/1'>Product 1</Link>
      <br />
      <Link href='/products/2'>Product 2</Link>
      <br />
      <Link href='/products/3'>Product 3</Link>
      <br />
    </div>
  )
}
