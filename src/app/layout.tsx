import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'Sample Next Application',
    template: '%s | Sample Next Application',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
		<div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
			<header style={{ background: 'lightblue', padding: '1rem' }}><p>Header</p></header>
			{children}
			<footer style={{ background: 'lightgrey', padding: '1rem' , marginTop: 'auto'}}><p>Footer</p></footer>
		</div>
      </body>
    </html>
  )
}
