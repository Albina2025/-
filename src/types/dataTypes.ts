// AI
export interface AIType {
  name: string;
  value: number;
  action: string;
  apiUsage: boolean;
  subject: string;
  platformType: string;
  equipmentName: string;
  equipmentPurpose: string;
  ownerDepartment: string;
  equipmentSupplier: string;
  purchaseDate: string;
  purchaseAmount: number;
  currency: string;
  shortCharacteristics: string;
  aiModelName: string;
  aiModelPurpose: string;
  aiModelDeveloper: string;
  apiProvider: string;
}

export interface AiFilterType {
  subjectId: string | null;
  platformType: string | null;
}

// Software
export interface SoftwareType {
    name: string; 
    version: string;
    action: string;
    subject: string;
    purpose: string;
    manufacturer: string;
    supplier: string;
    purchaseDate: string;
    purchaseAmount: number;
    currency: string;
    lastUpdateDate: string;
    licenseType: string;
    licenseEndDate: string;
    licenseCount: number;
}

export interface SoftwareFilterType {
  subjectId: string | null;
}

// PrivateSector
export interface PrivateSectorType {
  subject: string
  name: string
  purpose: string
  status: string
  action?: string
}

export interface PrivateSectorFilterType {
  name: string | null
  address: string | null
  useAPI: boolean
  audited: boolean
}

export type DataType = 'ai' | 'software' | 'privateSector';

export type DataUnion =
  | AIType
  | SoftwareType
  | PrivateSectorType;

export interface BaseItem {
  id: string;
  type: DataType;
  data: DataUnion;
}