import BarChart from '@/components/BarChart'
import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <>
      <Link href='/'>Home</Link>
      <h1>This is Dashboard</h1>
      <BarChart />
    </>
  )
}
