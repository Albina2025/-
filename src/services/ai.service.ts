import { api } from "../api/axios";
import type {
  CreateAiRequest,
  AiSelectRequest,
  AiSelectResponse,
} from "../types/ai.types";

export const createAi = (data: CreateAiRequest) =>
  api.post("/api/v1/ai", data);

export const selectAi = (data: AiSelectRequest) =>
  api.post<AiSelectResponse>("/api/v1/ai/select", data);

export const deleteAi = (id: number) =>
  api.delete(`/api/v1/ai/${id}`);

export const updateAi = (id: number, data: CreateAiRequest) =>
  api.put(`/api/v1/ai/${id}`, data);