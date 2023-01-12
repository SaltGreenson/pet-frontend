import { ReactNode } from "react";

export interface IVetDashboard {
  address: string;
  companyName: string;
  id: string;
  isUpToDate: boolean;
  certifiedBy: string;
  User: IUser;
  LegalDocuments: ILegalDocuments[];
  phoneNumber: string;
  PhotoGallery: IPhotoGallery[];
  profilePhoto: string;
  VeterinarianStaff: IVeterinarianStaff[];
  userId: string;
  websiteLink: string;
}

export interface IUser {
  email: string;
  id: string;
}

export interface IVeterinarianStaff {
  abbreviatedCredentials: string;
  credentials?: VeterinarianCredentials;
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber?: string;
  position?: VeterinarianPosition;
  photo?: string;
  vetProfileId: string;
}

export interface IPhotoGallery {
  id: string;
  url: string;
  vetProfileId: string;
}

export interface ILegalDocuments {
  id: string;
  documentName: string;
  url: string;
  vetProfileId: string;
}

export enum VeterinarianPosition {
  ASSISTANT = "Assistant",
  VETERINARIAN = "Veterinarian",
}

export enum VeterinarianCredentials {
  BACHELOR_OF_VETERINARY_MEDICINE_AND_SURGERY = "Bachelor of veterinary medicine and surgery",
  DOCTOR_OF_VETERINARY_MEDICINE = "Doctor of veterinary medicine",
}

export type LayoutContentType = {
  component: ReactNode;
  hrefTitle: string;
  href: string;
  title: string;
};
