import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import type { RegisterLinkRequest } from '../register-link'
import { links } from './fetch-recent-links-mock'

export const registerLinkMock = http.post<never, RegisterLinkRequest>(
  '/links',
  async ({ request }) => {
    const { title, url } = await request.json()

    links.push({
      id: faker.string.uuid(),
      title,
      url,
      code: faker.string.nanoid().slice(0, 8),
      accessCount: 0,
      createdAt: new Date(),
    })

    return HttpResponse.json(
      {},
      {
        status: 201,
      },
    )
  },
)
