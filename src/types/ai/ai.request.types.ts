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

export interface AiSearchRequest {
  pageRequest: {
    page: number;
    limit: number;
  };

  sorting: {
    sortBy: "ID";
    sortDirection: "ASC" | "DESC";
  };

  filter?: {
    ministryId?: number | null;
    computePlatformTypeId?: number | null;
  };
}