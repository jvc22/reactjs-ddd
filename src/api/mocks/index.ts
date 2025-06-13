import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { fetchRecentLinksMock } from './fetch-recent-links-mock'
import { getMetricsMock } from './get-metrics-mock'
import { getProfileMock } from './get-profile-mock'
import { signInMock } from './sign-in-mock'
import { signUpMock } from './sign-up-mock'

export const worker = setupWorker(
  signInMock,
  signUpMock,
  getProfileMock,
  getMetricsMock,
  fetchRecentLinksMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
