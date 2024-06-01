'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import './style.css'

const authLinks = [
  { name: 'Sign Up', href: '/signup' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div>
      <div className='container'>
        <input type='text' placeholder='layout input...' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Submit</button>
      </div>
        {authLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link key={link.href} href={link.href} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'} >{link.name}</Link>
          )
        })}
      {children}
      <Link href='/'>Home</Link>
    </div>
  )
}
