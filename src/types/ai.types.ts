//  CREATE 
export interface CreateAiRequest {
  ministryId: number;
  computePlatformTypeId: number;

  hardwareName: string;
  hardwarePurpose: string;
  responsibleUnit: string;
  hardwareSupplier: string;

  purchaseDate: string;
  purchaseAmount: string;
  purchaseCurrencyId: number;

  hardwareSpecs: string;

  modelName: string;
  modelPurpose: string;
  modelDeveloper: string;

  usesApi: boolean;
  apiProvider: string;
}


//  FILTER 
export interface AiSelectRequest {
  pageRequest: {
    page: number;
    limit: number;
  };
  sorting: {
    sortBy: string;
    sortDirection: "ASC" | "DESC";
  };
  filter: {
    ministryId: number | null;
    computePlatformTypeId: number | null;
  };
}


//  RESPONSE 
export interface AiItem {
  id: number;
  titleKg: string;
  titleRu: string;
}

export interface AiSelectResponse {
  page: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  content: AiItem[];
}