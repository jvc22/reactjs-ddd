import { api } from '@/lib/ky'

export interface GetMetricsRequest {}

export interface GetMetricsResponse {
  metrics: {
    totalCount: number
    totalAccessCount: number
  }
}

export async function getMetrics() {
  const response = await api.get<GetMetricsResponse>('sharers/metrics').json()

  return response.metrics
}
