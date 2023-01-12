import React from "react";
import { useForm } from "react-hook-form";

import EditModal from "../../../elements/EditModal";
import { LicensingStatusFields } from "../fields";

import { ILegalDocuments } from "@/types/vet.types";

type PropsTypes = {
  documents: ILegalDocuments[];
  setIsActivePopUp: (value: boolean) => void;
};

const LicensingStatusForm = ({
  documents,
  setIsActivePopUp,
}: PropsTypes): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <EditModal
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setIsActivePopUp(false);
      })}
      title="Edit Profile"
      subTitle="Licensing status"
      setActive={setIsActivePopUp}
    >
      <LicensingStatusFields
        defaultValues={{
          documents,
        }}
        formValues={{
          register,
          errors,
        }}
      />
    </EditModal>
  );
};

export default LicensingStatusForm;
