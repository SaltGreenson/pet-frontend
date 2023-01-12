import React, { useState } from "react";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

import { CustomInput, InputFile, InputPhoto } from "@/components/common/inputs";
import { CustomLabel } from "@/components/common/labels";
import Select from "@/components/common/Select";

import {
  IVeterinarianStaff,
  VeterinarianCredentials,
  VeterinarianPosition,
} from "@/types/vet.types";

import { CustomBlock } from "@/components/common/Block/block-styles";

type PropsTypes = {
  defaultValues?: {
    staff: IVeterinarianStaff;
  };
  formValues: {
    errors: FieldErrors<FieldValues>;
    register: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
  };
};

const MedicalStaffFields = ({
  defaultValues,
  formValues,
}: PropsTypes): JSX.Element => {
  const [register] = useState(() => formValues?.register);
  const errors = formValues.errors;

  return (
    <>
      <CustomBlock margin={"0 0 2rem 0"}>
        <CustomLabel required>Upload a photo</CustomLabel>
        <InputPhoto
          imageUrl={defaultValues?.staff.photo}
          register={register(`staffPhoto_${defaultValues?.staff.id}`, {
            required: {
              value: true,
              message: "Photo must be filled in",
            },
          })}
          error={
            errors[`staffPhoto_${defaultValues?.staff.id}`] &&
            String(errors[`staffPhoto_${defaultValues?.staff.id}`]?.message)
          }
        />
      </CustomBlock>

      <CustomInput
        label={"First Name"}
        defaultValue={defaultValues?.staff.firstName}
        placeholder={"e.g. Alex"}
        marginContainer={"0 0 2rem 0"}
        register={register(`staffFirstName_${defaultValues?.staff.firstName}`, {
          required: {
            value: true,
            message: "First name must be filled in",
          },
        })}
        error={
          errors[`staffFirstName_${defaultValues?.staff.firstName}`] &&
          String(
            errors[`staffFirstName_${defaultValues?.staff.firstName}`]?.message
          )
        }
        required
      />

      <CustomInput
        label={"Last Name"}
        defaultValue={defaultValues?.staff.lastName}
        placeholder={"e.g. Hedry"}
        marginContainer={"0 0 2rem 0"}
        register={register(`staffLastName_${defaultValues?.staff.lastName}`, {
          required: {
            value: true,
            message: "Last name must be filled in",
          },
        })}
        error={
          errors[`staffLastName_${defaultValues?.staff.lastName}`] &&
          String(
            errors[`staffLastName_${defaultValues?.staff.lastName}`]?.message
          )
        }
        required
      />

      <CustomInput
        label={"Middle Name"}
        defaultValue={defaultValues?.staff.middleName}
        placeholder={"e.g. Sonne"}
        marginContainer={"0 0 2rem 0"}
        register={register(
          `staffMiddleName_${defaultValues?.staff.middleName}`,
          {
            required: {
              value: true,
              message: "Middle name must be filled in",
            },
          }
        )}
        error={
          errors[`staffMiddleName_${defaultValues?.staff.middleName}`] &&
          String(
            errors[`staffMiddleName_${defaultValues?.staff.middleName}`]
              ?.message
          )
        }
        required
      />

      <CustomBlock margin={"0 0 2rem 0"}>
        {/*Probably worker should have more than one credential. Need ask*/}
        <Select
          label={"Credentials"}
          defaultValue={defaultValues?.staff.credentials}
          elements={[
            {
              label:
                VeterinarianCredentials.BACHELOR_OF_VETERINARY_MEDICINE_AND_SURGERY,
              value:
                VeterinarianCredentials.BACHELOR_OF_VETERINARY_MEDICINE_AND_SURGERY,
            },
            {
              label: VeterinarianCredentials.DOCTOR_OF_VETERINARY_MEDICINE,
              value: VeterinarianCredentials.DOCTOR_OF_VETERINARY_MEDICINE,
            },
          ]}
          register={register(
            `staffCredentials_${defaultValues?.staff.credentials}`,
            {
              required: {
                value: true,
                message: "Credentials must be filled in",
              },
            }
          )}
          error={
            errors[`staffCredentials_${defaultValues?.staff.credentials}`] &&
            String(
              errors[`staffCredentials_${defaultValues?.staff.credentials}`]
                ?.message
            )
          }
          required
        />
      </CustomBlock>

      <CustomBlock margin={"0 0 2rem 0"}>
        <Select
          label={"Position"}
          defaultValue={defaultValues?.staff.position}
          elements={[
            {
              label: VeterinarianPosition.VETERINARIAN,
              value: VeterinarianPosition.VETERINARIAN,
            },
            {
              label: VeterinarianPosition.ASSISTANT,
              value: VeterinarianPosition.ASSISTANT,
            },
          ]}
          register={register(`staffPosition_${defaultValues?.staff.position}`, {
            required: {
              value: true,
              message: "Position must be filled in",
            },
          })}
          error={
            errors[`staffPosition_${defaultValues?.staff.position}`] &&
            String(
              errors[`staffPosition_${defaultValues?.staff.position}`]?.message
            )
          }
          required
        />
      </CustomBlock>

      <InputFile label={"Legal Documentation"} required />
    </>
  );
};

export default MedicalStaffFields;
