import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
        <main className="max-w-6xl flex-1 mx-auto">
          <Navbar />
          <body>{children}</body>
        </main>
      </div>
  )
}
