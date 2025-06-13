import { api } from '@/lib/ky'

export type GetProfileRequest = void

export interface GetProfileResponse {
  user: {
    name: string
    email: string
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('profile').json()

  return response.user
}
