import { http, HttpResponse } from 'msw'

import type { SignUpRequest } from '../sign-up'

export const signUpMock = http.post<never, SignUpRequest>(
  '/sign-up',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@example.com') {
      return HttpResponse.json(null, { status: 201 })
    } else {
      return HttpResponse.json(
        { message: 'O e-mail já está em uso.' },
        { status: 409 },
      )
    }
  },
)
