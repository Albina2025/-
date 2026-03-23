import type { ControlGroupsItem } from "./controlGroups.item.types"

export interface ControlGroupsSearchResponse {
  page: number
  numberOfElements: number
  totalPages: number
  totalElements: number
  content: ControlGroupsItem[]
}