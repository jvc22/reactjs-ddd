import { api } from '@/lib/ky'

export interface SignUpRequest {
  name: string
  email: string
  password: string
}

type SignUpResponse = void

export async function signUp({ name, email, password }: SignUpRequest) {
  await api
    .post<SignUpResponse>('sign-up', {
      json: {
        name,
        email,
        password,
      },
    })
    .json()
}
