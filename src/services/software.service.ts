import { api } from '../api/axios'
import type {
  SoftwareCreateRequest,
  SoftwareListRequest,
  PageResponse,
  SoftwareResponse,
} from '../types/software.types'

export const createSoftware = (data: SoftwareCreateRequest) =>
  api.post('/api/v1/software', data)

export const getSoftwareList = (data: SoftwareListRequest) =>
  api.post<PageResponse<SoftwareResponse>>(
    '/api/v1/software/search',
    data
  )

export const deleteSoftware = (id: number) =>
  api.delete(`/api/v1/software/${id}`)

export const updateSoftware = (id: number, data: SoftwareCreateRequest) =>
  api.put(`/api/v1/software/${id}`, data)