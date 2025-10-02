'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import { AppSidebar } from './Sidebar'
import { SidebarProvider } from './ui/sidebar'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()

  const publicPages = ['/', '/sign-in', '/sign-up']

  const isPublicPage = publicPages.some(page => {
    if (page === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(page)
  })

  if (isPublicPage) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-background">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}