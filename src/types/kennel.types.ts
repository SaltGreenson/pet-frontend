export interface IKennelDashboard {
  id: string;
  address: string;
  animalType: AnimalTypes;
  companyName: string;
  certifiedBy: string;
  catVaccinations: ICatVaccination[];
  dogVaccinations: IDogVaccination[];
  forFamilies: IForFamilies[];
  isUpToDate: boolean;
  mainAmenities: IMainAmenities[];
  LegalDocuments: ILegalDocuments[];
  phoneNumber: string;
  PhotoGallery: IPhotoGallery[];
  profilePhoto: string;
  PropertyHighlights: IPropertyHighlights[];
  User: IUser;
  userId: string;
  websiteLink: string;
  whatsAround: IWhatsAround[];
}

export interface IUser {
  id: string;
  email: string;
}

export interface IPropertyHighlights {
  id: string;
  description: string;
  photo: string;
}

export interface IMainAmenities {
  id: string;
  description: string;
}

export interface IForFamilies {
  id: string;
  description: string;
}

export interface IWhatsAround {
  id: string;
  description: string;
}

export interface IDogVaccination {
  id: string;
  description: string;
}

export interface ICatVaccination {
  id: string;
  description: string;
}

export interface IPhotoGallery {
  id: string;
  url: string;
  kennelProfileId: string;
}

export interface ILegalDocuments {
  id: string;
  documentName: string;
  url: string;
  kennelProfileId: string;
}

export enum AnimalTypes {
  DOG_KENNEL = "Dog Kennel",
  CAT_KENNEL = "Cat Kennel",
  DOG_AND_CAT_KENNEL = "Dog & Cat Kennel",
}
