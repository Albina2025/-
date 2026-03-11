import type{ CriteriaItem } from "./criteria.item.types"

export interface CriteriaSearchResponse {
  page: number
  numberOfElements: number
  totalPages: number
  totalElements: number
  content: CriteriaItem[]
}