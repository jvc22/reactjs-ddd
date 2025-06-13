import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { fetchRecentLinksMock } from './fetch-recent-links-mock'
import { getMetricsMock } from './get-metrics-mock'

export const worker = setupWorker(getMetricsMock, fetchRecentLinksMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
