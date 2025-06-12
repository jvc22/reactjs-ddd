import { Outlet } from 'react-router'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="w-full p-6">
        <Outlet />
      </div>
    </div>
  )
}
