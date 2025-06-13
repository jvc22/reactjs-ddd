import { api } from '@/lib/ky'

export interface FetchRecentLinksRequest {
  page: number
}

export interface FetchRecentLinksResponse {
  links: {
    id: string
    title: string
    url: string
    code: string
    accessCount: number
    createdAt: Date
    updatedAt?: Date
  }[]
  totalCount: number
}

export async function fetchRecentLinks({ page }: FetchRecentLinksRequest) {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())

  const response = await api
    .get<FetchRecentLinksResponse>('links', {
      searchParams,
    })
    .json()

  return response
}
