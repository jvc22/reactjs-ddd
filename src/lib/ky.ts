import ky from 'ky'

import { env } from '@/env'
import { getCookieValue } from '@/utils/cookies'

export const api = ky.create({
  prefixUrl: env.VITE_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = getCookieValue('token')

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
      async () => {
        if (env.VITE_ENABLE_API_DELAY) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      },
    ],
  },
})
