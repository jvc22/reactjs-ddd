import { api } from '@/lib/ky'

export type GetProfileRequest = void

export interface GetProfileResponse {
  sharer: {
    name: string
    email: string
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('sharers').json()

  return response.sharer
}
