import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from './components/theme/theme-provider'
import { TooltipProvider } from './components/ui/tooltip'
import { queryClient } from './lib/tanstack-query'
import { router } from './router'

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
