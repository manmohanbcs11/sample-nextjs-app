import { Card } from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default function ArchivedNotifications() {
  return (
    <Card>
      <h2>Archived Notifications here.</h2>
      <Link href='/complex-dashboard'>Default.</Link>
    </Card>
  )
}
