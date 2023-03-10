import {
  IVetDashboard,
  VeterinarianCredentials,
  VeterinarianPosition,
} from "@/types/vet.types";

export const vetDashboard: IVetDashboard = {
  id: "11",
  address: "2604 Crain Hwy, Bowie, MD 20716",
  companyName: "Highway Veterinary Hospital",
  phoneNumber: "+1 (808) 216-60-211",
  profilePhoto: "/Buildings/hospital.png",
  userId: "5",
  websiteLink: "allydvm.com",
  certifiedBy: "*Certified by the State of Maryland",
  isUpToDate: false,
  User: {
    id: "10",
    email: "allydvm@gmail.com",
  },
  LegalDocuments: [],
  PhotoGallery: [
    {
      id: "1",
      url: "/LogIn/logInDog.png",
      vetProfileId: "",
    },
    {
      id: "2",
      url: "/Gallery/photoGallery2.png",
      vetProfileId: "",
    },
    {
      id: "3",
      url: "/Gallery/photoGallery3.png",
      vetProfileId: "",
    },
    {
      id: "4",
      url: "/Gallery/photoGallery4.png",
      vetProfileId: "",
    },
  ],
  VeterinarianStaff: [
    {
      id: "6",
      credentials: VeterinarianCredentials.DOCTOR_OF_VETERINARY_MEDICINE,
      abbreviatedCredentials: "DVM",
      firstName: "Julie",
      lastName: "Winters",
      phoneNumber: "+1 (808) 124-68-201",
      position: VeterinarianPosition.VETERINARIAN,
      middleName: "Marcus",
      photo: "/Persons/littlePerson1.png",
      vetProfileId: "",
    },
    {
      id: "7",
      credentials: VeterinarianCredentials.DOCTOR_OF_VETERINARY_MEDICINE,
      abbreviatedCredentials: "DVM",
      firstName: "Megan",
      lastName: "Martorana",
      phoneNumber: "+1 (808) 100-38-201",
      position: VeterinarianPosition.VETERINARIAN,
      middleName: "Picus",
      photo: "/Persons/littlePerson2.png",
      vetProfileId: "",
    },
    {
      id: "8",
      credentials: VeterinarianCredentials.DOCTOR_OF_VETERINARY_MEDICINE,
      abbreviatedCredentials: "DVM",
      firstName: "Harrison",
      lastName: "Foy",
      phoneNumber: "+1 (808) 114-65-200",
      position: VeterinarianPosition.VETERINARIAN,
      middleName: "Jonny",
      photo: "/Persons/littlePerson3.png",
      vetProfileId: "",
    },
    {
      id: "9",
      credentials:
        VeterinarianCredentials.BACHELOR_OF_VETERINARY_MEDICINE_AND_SURGERY,
      abbreviatedCredentials: "BVMS",
      firstName: "Euan",
      lastName: "Murray",
      phoneNumber: "+1 (808) 024-63-281",
      position: VeterinarianPosition.ASSISTANT,
      middleName: "Henry",
      photo: "/Persons/littlePerson4.png",
      vetProfileId: "",
    },
  ],
};
