import { http, HttpResponse } from 'msw'

import type { RegisterLinkRequest } from '../register-link'

export const registerLinkMock = http.post<never, RegisterLinkRequest>(
  '/links',
  async () => {
    return HttpResponse.json(
      {},
      {
        status: 200,
      },
    )
  },
)
