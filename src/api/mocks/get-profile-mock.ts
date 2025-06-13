import { http, HttpResponse } from 'msw'

import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/profile',
  async () => {
    return HttpResponse.json(
      {
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
      },
      { status: 200 },
    )
  },
)
