import { api } from '@/lib/ky'

export interface SignInRequest {
  email: string
  password: string
}

export interface SignInResponse {
  token: string
}

export async function signIn({ email, password }: SignInRequest) {
  const response = await api
    .post<SignInResponse>('sign-in', {
      json: {
        email,
        password,
      },
    })
    .json()

  return response.token
}
