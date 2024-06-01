import React from 'react';

export default function ComplexDashboardLayout({ children, analytics, notifications, revenue, signin }:
  {
    children: React.ReactNode, analytics: React.ReactNode, notifications: React.ReactNode,
    revenue: React.ReactNode, signin: React.ReactNode
  }) {

  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <h2>This is complex dashboard layout</h2>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{analytics}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }} >{notifications}</div>
      </div>
    </div>
  ) : (signin);
}
