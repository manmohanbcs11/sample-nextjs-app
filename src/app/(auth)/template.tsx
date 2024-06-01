'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import './style.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input type='text' placeholder='template input...' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Submit</button>
      </div>
      {children}
    </div>
  )
}
