import { Card } from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default function Notifications() {
  return (
    <Card>
      <h2>Notifications here.</h2>
      <Link href='/complex-dashboard/archived'>Archived Notification.</Link>
    </Card>
  )
}
