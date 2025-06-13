import { api } from '@/lib/ky'

export interface DeleteLinkRequest {
  id: string
}

export type DeleteLinkResponse = void

export async function deleteLink({ id }: DeleteLinkRequest) {
  await api.delete<DeleteLinkResponse>(`links/${id}`)
}
