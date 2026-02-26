import { api } from "../api/axios";

export interface AiItem {
  id: string;
  subject: string;
  aiModelName: string;
  purchaseAmount: number;
}

export interface AiResponse {
  content: AiItem[];
  totalElements: number;
}

export interface AiQuery {
  page: number;
  limit: number;
  search?: string;
}

export const getAi = (params: AiQuery) =>
  api.get<AiResponse>("/api/ai", { params });

export const createAi = (data: Partial<AiItem>) =>
  api.post("/api/ai", data);

export const updateAi = (id: string, data: Partial<AiItem>) =>
  api.put(`/api/ai/${id}`, data);

export const deleteAi = (id: string) =>
  api.delete(`/api/ai/${id}`);