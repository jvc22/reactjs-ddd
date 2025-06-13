import { http, HttpResponse } from 'msw'

import type { SignInRequest } from '../sign-in'

export const signInMock = http.post<never, SignInRequest>(
  '/sign-in',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@example.com') {
      return HttpResponse.json(
        { token: 'sample-jwt' },
        {
          status: 200,
        },
      )
    } else {
      return HttpResponse.json(
        { message: 'Credenciais inválidas.' },
        { status: 400 },
      )
    }
  },
)
