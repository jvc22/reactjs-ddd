import ky from 'ky'

import { env } from '@/env'

export const api = ky.create({
  prefixUrl: env.VITE_API_URL,
  hooks: {
    beforeRequest: [
      async () => {
        if (env.VITE_ENABLE_API_DELAY) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      },
    ],
  },
})
