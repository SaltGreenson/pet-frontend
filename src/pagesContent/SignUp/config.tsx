import {
  SignUpKennelForm,
  SignUpOwnerForm,
  SignUpVetForm,
} from "@/components/forms";
import React from "react";
import { TabType } from "@/components/common/tabs/Tabs/Tabs";

export const tabsArrayConfig: TabType[] = [
  { key: "pet-owner", title: "Pet owner", content: <SignUpOwnerForm /> },
  { key: "kennel", title: "Kennel", content: <SignUpKennelForm /> },
  { key: "vet", title: "Veterinarian", content: <SignUpVetForm /> },
];

export const backgroundImagesConfig = [
  "SignUp/signUpOwner.png",
  "SignUp/signUpKennel.png",
  "SignUp/signUpVet.png",
];
