import type { UserItem } from "../types/types";

export type UserSearchResponse = {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: UserItem[];
};