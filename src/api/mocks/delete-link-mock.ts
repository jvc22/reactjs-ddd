import { http, HttpResponse } from 'msw'

import type { DeleteLinkRequest } from '../delete-link'
import { links } from './fetch-recent-links-mock'

export const deleteLinkMock = http.delete<DeleteLinkRequest, never>(
  '/links/:id',
  async ({ params }) => {
    const linksIndex = links.findIndex((link) => link.id === params.id)

    links.splice(linksIndex, 1)

    return HttpResponse.json(null, { status: 200 })
  },
)
