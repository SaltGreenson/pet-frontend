import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

import PersonalFields from "../fields/personalFields";
import ContactFields from "../fields/contactFields";
import EditModal from "../../../elements/EditModal";

import { IVetDashboard } from "@/types/vet.types";

import "react-phone-input-2/lib/style.css";

type PropsTypes = {
  dashboard: IVetDashboard;
  setIsActivePopUp: (value: boolean) => void;
};

const PersonalForm = ({ dashboard, setIsActivePopUp }: PropsTypes) => {
  const [localAddress, city, ...stateZip] = useMemo<Array<string>>(
    () => dashboard.address.split(","),
    [dashboard.address]
  );

  const [state, zip] = useMemo(
    () => String(stateZip.at(-1)).trim().split(" "),
    [stateZip]
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <EditModal
      title="Edit Profile"
      subTitle="Personal"
      setActive={setIsActivePopUp}
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setIsActivePopUp(false);
      })}
    >
      <PersonalFields
        defaultValues={{
          photoGallery: dashboard.PhotoGallery,
          profilePhoto: dashboard.profilePhoto,
          companyName: dashboard.companyName,
        }}
        formValues={{
          errors,
          register,
        }}
        isInPopUp
      />
      <ContactFields
        defaultValues={{
          address: localAddress,
          city,
          zip,
          state,
          email: dashboard.User.email,
          phoneNumber: dashboard.phoneNumber,
          websiteLink: dashboard.websiteLink,
        }}
        formValues={{
          errors,
          register,
          control,
        }}
      />
    </EditModal>
  );
};

export default PersonalForm;
