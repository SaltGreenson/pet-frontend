import React, { useState } from "react";

import { CustomInput, InputFile, InputPhoto } from "@/components/common/inputs";
import { CustomLabel } from "@/components/common/labels";
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
  RegisterOptions,
} from "react-hook-form";
import { IPhotoGallery } from "@/types/vet.types";

import { RelativeBlock } from "@/components/common/Block/block-styles";

type PropsTypes = {
  defaultValues?: {
    companyName?: string;
    photoGallery?: IPhotoGallery[];
    profilePhoto?: string;
  };
  formValues: {
    errors: FieldErrors<FieldValues>;
    register: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
  };
  isInPopUp?: boolean;
};

const PersonalFields = ({
  defaultValues,
  formValues,
  isInPopUp,
}: PropsTypes): JSX.Element => {
  const [register] = useState(() => formValues?.register);
  const errors = formValues.errors;

  return (
    <>
      <RelativeBlock margin={"0 0 2rem 0"}>
        <CustomLabel>Upload a photo</CustomLabel>
        <InputPhoto imageUrl={defaultValues?.profilePhoto} />
      </RelativeBlock>

      <CustomInput
        label={"Business's Name"}
        placeholder={"e. g. CatDog"}
        marginContainer={"0 0 2rem 0"}
        defaultValue={defaultValues?.companyName}
        register={
          register &&
          register("companyName", {
            required: {
              value: true,
              message: "Company must be filled in",
            },
          })
        }
        error={errors?.companyName && String(errors?.companyName?.message)}
        required
      />
      <InputFile
        label={"Upload a photo(0/10)"}
        photoGallery={defaultValues?.photoGallery}
        marginContainer={"0 0 1rem 0"}
        isInPopUp={isInPopUp}
        acceptsPhotos
        required
        register={
          register &&
          register("photoGallery", {
            required: {
              value: true,
              message: "Photos must be filled in",
            },
          })
        }
        error={errors?.photoGallery && String(errors?.photoGallery?.message)}
      />
    </>
  );
};

export default PersonalFields;
