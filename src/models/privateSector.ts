

export interface PrivateSectorType {
  id: string
  subject: string
  name: string
  purpose: string
  status: string
  action?: string
}



export interface PrivateSectorFilterType {
  name: string | null
  address: string | null
  useAPI: boolean
  audited: boolean
}