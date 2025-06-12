import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getMetricsMock } from './get-metrics-mock'

export const worker = setupWorker(getMetricsMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
