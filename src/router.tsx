import { createBrowserRouter } from 'react-router'

import { AppLayout } from './pages/_layouts/app'
import { LinksPage } from './pages/app/links'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        children: [
          { path: '/links', element: <LinksPage /> },
          { path: '/', element: <LinksPage /> },
        ],
      },
    ],
  },
])
