import { api } from '@/lib/ky'

export interface RegisterLinkRequest {
  title: string
  url: string
}

export type RegisterLinkResponse = void

export async function registerLink({ title, url }: RegisterLinkRequest) {
  await api.post<RegisterLinkResponse>('links', {
    json: {
      title,
      url,
    },
  })
}
