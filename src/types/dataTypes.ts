// AI
export interface AIType {
  name: string;
  value: number;
  action: string;
  apiUsage: string;
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

// PrivateSector
export interface PrivateSectorType {
    action: string;
    subject: string;
    name: string;
    purpose: string;
    status: string; 
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