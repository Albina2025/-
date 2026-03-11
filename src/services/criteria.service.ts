import { api } from "../api/axios"
import type { CriteriaFormValues } from "../types/criteria/criteria.form.types"

export const getCriteriaById = async (id: number) => {
  const { data } = await api.get(`/api/v1/criteria/${id}`)
  return data
}

export const createCriteria = async (values: CriteriaFormValues) => {
  const { data } = await api.post("/api/v1/criteria", values)
  return data
}

export const updateCriteria = async (id: number, values: CriteriaFormValues) => {
  const { data } = await api.put(`/api/v1/criteria/${id}`, values)
  return data
}

export const changeCriteriaStatus = async (id: number, activation: boolean) => {
  const { data } = await api.put(`/api/v1/criteria/activation/${id}?activation=${activation}`)
  return data
}