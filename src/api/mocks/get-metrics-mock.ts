import { http, HttpResponse } from 'msw'

import type { GetMetricsResponse } from '../get-metrics'
import { links } from './fetch-recent-links-mock'

export const getMetricsMock = http.get<never, never, GetMetricsResponse>(
  '/sharers/metrics',
  async () => {
    return HttpResponse.json(
      {
        metrics: {
          totalCount: links.length,
          totalAccessCount: links.reduce((acc, link) => {
            return acc + link.accessCount
          }, 0),
        },
      },
      { status: 200 },
    )
  },
)
