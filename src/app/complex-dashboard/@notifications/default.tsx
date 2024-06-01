import { Card } from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default function DefaultNotifications() {
  return (
    <Card>
      <h2>Default Notifications here.</h2>
      <Link href='/complex-dashboard/archived'>Archived Notification.</Link>
    </Card>
  )
}
