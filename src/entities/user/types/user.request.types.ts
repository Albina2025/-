export type UserSearchRequest = {
  pageRequest: {
    page: number;
    limit: number;
  };
  sorting: {
    sortBy: string;
    sortDirection: "ASC" | "DESC";
  };
  filter: {
    id?: number;
    username?: string;
    name?: string;
    surname?: string;
    patronymic?: string;
    ministryId?: number;
    divisionId?: number;
    enabled?: boolean;
  };
};