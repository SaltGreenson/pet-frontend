import { AnimalTypes, IKennelDashboard } from "@/types/kennel.types";

export const kennelDashboard: IKennelDashboard = {
  id: "1",
  address: "2102 Brumbu Hywyumbu, Lokos, KL 15341",
  companyName: "Dogwood Acress Pet Retread, MD",
  phoneNumber: "+1 (650) 214-62-71",
  profilePhoto: "/Buildings/kennel.png",
  animalType: AnimalTypes.DOG_AND_CAT_KENNEL,
  websiteLink: "dogwoodacres.com",
  certifiedBy: "*Certified by the State of Maryland",
  userId: "50",
  isUpToDate: true,
  LegalDocuments: [],
  User: {
    id: "50",
    email: "cat&dog@gmail.com",
  },
  PropertyHighlights: [
    {
      id: "2",
      photo: "/Highlights/house.svg",
      description: "Dog and cat boarding",
    },
    {
      id: "3",
      photo: "/Highlights/foot.svg",
      description: "Lorem ipsum",
    },
    {
      id: "4",
      photo: "/Highlights/ball.svg",
      description: "Lorem ipsum",
    },
    {
      id: "5",
      photo: "/Highlights/sofa.svg",
      description: "Luxury Suites",
    },
    {
      id: "6",
      photo: "/Highlights/pool.svg",
      description: "Swimming pool",
    },
    {
      id: "7",
      photo: "/Highlights/sun.svg",
      description: "Private outdoor patios",
    },
    {
      id: "8",
      photo: "/Highlights/tree.svg",
      description: "Lorem ipsum",
    },
    {
      id: "9",
      photo: "/Highlights/wind.svg",
      description: "Climate controlled",
    },
  ],
  PhotoGallery: [
    {
      id: "10",
      url: "/Buildings/kennel.png",
      kennelProfileId: "1",
    },
    {
      id: "11",
      url: "/Gallery/photoGallery5.jpg",
      kennelProfileId: "1",
    },
    {
      id: "12",
      url: "/Gallery/photoGallery6.jpg",
      kennelProfileId: "1",
    },
    {
      id: "13",
      url: "/Gallery/photoGallery7.jpg",
      kennelProfileId: "1",
    },
  ],
  catVaccinations: [
    {
      id: "14",
      description: "Rabies",
    },
    {
      id: "15",
      description: "Feline Distemper",
    },
    {
      id: "16",
      description: "Feline Herpesvirus",
    },
    {
      id: "17",
      description: "Calicivirus",
    },
    {
      id: "18",
      description: "Feline leukemia",
    },
    {
      id: "19",
      description: "Bordetella",
    },
  ],
  dogVaccinations: [
    {
      id: "20",
      description: "Rabies",
    },
    {
      id: "21",
      description: "Distemper",
    },
    {
      id: "22",
      description: "Parvovirus",
    },
    {
      id: "23",
      description: "Adenovirus (type 1)",
    },
    {
      id: "24",
      description: "Adenovirus (type 2)",
    },
    {
      id: "25",
      description: "Bordetella",
    },
    {
      id: "26",
      description: "Lyme Disease",
    },
    {
      id: "27",
      description: "Leptospirosis",
    },
    {
      id: "28",
      description: "Parainfluenza",
    },
    {
      id: "29",
      description: "Canine Influenza",
    },
  ],
  mainAmenities: [
    {
      id: "30",
      description: "Lorem ipsum",
    },
    {
      id: "31",
      description: "Lorem ipsum",
    },
    {
      id: "32",
      description: "Lorem ipsum",
    },
    {
      id: "33",
      description: "Lorem ipsum",
    },
    {
      id: "34",
      description: "Lorem ipsum",
    },
    {
      id: "35",
      description: "Lorem ipsum",
    },
  ],
  forFamilies: [
    {
      id: "36",
      description: "Lorem ipsum",
    },
    {
      id: "37",
      description: "Lorem ipsum",
    },
    {
      id: "38",
      description: "Lorem ipsum",
    },
    {
      id: "39",
      description: "Lorem ipsum",
    },
    {
      id: "40",
      description: "Lorem ipsum",
    },
    {
      id: "41",
      description: "Lorem ipsum",
    },
  ],
  whatsAround: [
    {
      id: "42",
      description: "Lorem ipsum",
    },
    {
      id: "43",
      description: "Lorem ipsum",
    },
    {
      id: "44",
      description: "Lorem ipsum",
    },
    {
      id: "45",
      description: "Lorem ipsum",
    },
    {
      id: "46",
      description: "Lorem ipsum",
    },
    {
      id: "47",
      description: "Lorem ipsum",
    },
  ],
};
