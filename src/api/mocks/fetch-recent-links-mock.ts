import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import type { FetchRecentLinksResponse } from '../fetch-recent-links'

export const links: FetchRecentLinksResponse['links'] = Array.from({
  length: 22,
})
  .map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.company.name(),
      url: faker.internet.url(),
      code: faker.string.nanoid().slice(0, 8),
      accessCount: faker.number.int({ min: 2, max: 1000 }),
      createdAt: faker.date.past(),
      updatedAt: faker.helpers.arrayElement([undefined, faker.date.recent()]),
    }
  })
  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

export const fetchRecentLinksMock = http.get<
  never,
  never,
  FetchRecentLinksResponse
>('/links', async ({ request }) => {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1

  const paginatedLinks = links.slice((page - 1) * 10, page * 10)

  return HttpResponse.json(
    {
      links: paginatedLinks,
      totalCount: links.length,
    },
    { status: 200 },
  )
})
