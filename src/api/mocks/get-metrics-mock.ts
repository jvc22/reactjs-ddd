import { http, HttpResponse } from 'msw'

import type { GetMetricsResponse } from '../get-metrics'

export const getMetricsMock = http.get<never, never, GetMetricsResponse>(
  '/sharers/metrics',
  async () => {
    return HttpResponse.json({
      metrics: {
        totalCount: 22,
        totalAccessCount: 700,
      },
    })
  },
)
