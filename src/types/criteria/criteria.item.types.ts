export interface ControlItem {
  id: number
  titleRu: string
  titleKg: string
}

export interface CriteriaItem {
  id: number
  titleRu: string
  titleKg: string
  enabled: boolean
  control: ControlItem
}