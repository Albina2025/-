export interface CriteriaSearchRequest {
  pageRequest: {
    page: number
    limit: number
  }

  sorting: {
    sortBy: string
    sortDirection: "ASC" | "DESC"
  }

  filter?: {
    id?: number
    title?: string
    controlId?: number
  }
}