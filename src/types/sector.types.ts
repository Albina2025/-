/* CREATE */

export interface CreateSectorRequest {
  titleRu: string;
  titleKg: string;
  address: string;
  logo?: string;
  parentId?: number;
}

/*  SEARCH */

export interface SectorSearchRequest {
  pageRequest: {
    page: number;
    limit: number;
  };
  sorting: {
    sortBy: "ID" | "TITLE_RU" | "TITLE_KG" | "ADDRESS";
    sortDirection: "ASC" | "DESC";
  };
  filter: {
    id?: number;
    title?: string;
    address?: string;
    enabled?: boolean;
    exclude?: number;
    auditedMinistries?: boolean;
  };
}

/* RESPONSE */

export interface SectorParent {
  id: number;
  titleKg: string;
  titleRu: string;
}

export interface SectorItem {
  id: number;
  titleRu: string;
  titleKg: string;
  address: string;
  enabled: boolean;
  parent: SectorParent | null;
}

export interface SectorSearchResponse {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: SectorItem[];
}