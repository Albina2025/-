export interface SoftwareCreateRequest {
  ministryId: number;
  softwareName: string;
  softwarePurpose: string;
  manufacturer: string;
  supplier: string;
  purchaseDate: string;
  purchaseAmount: number;
  purchaseCurrencyId: number;
  softwareVersion: string;
  lastUpdateDate: string;
  licenseType: string;
  licenseExpiryDate: string;
  licenseCount: number;
}


export interface PageResponse<T> {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: T[];
}

export interface SoftwareResponse {
  id: number;
  titleKg: string;
  titleRu: string;
}

export interface PageRequest {
  page: number;
  limit: number;
}

export interface Sorting {
  sortBy: string;
  sortDirection: 'ASC' | 'DESC';
}

export interface SoftwareFilterRequest {
  ministryId: number;
}

export interface SoftwareListRequest {
  pageRequest: PageRequest;
  sorting: Sorting;
  filter: SoftwareFilterRequest;
}