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
  logo?: string;
}


export interface SectorSearchResponse {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: SectorItem[];
}


export interface SectorEnabledItem {
  id: number;
  titleKg: string;
  titleRu: string;
}

export interface SectorEnabledResponse {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: SectorEnabledItem[];
}