import React, { useState } from "react";

import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import { InputFile } from "@/components/common/inputs";

import { ILegalDocuments } from "@/types/vet.types";

type PropsTypes = {
  defaultValues?: {
    documents: ILegalDocuments[];
  };
  formValues: {
    errors: FieldErrors<FieldValues>;
    register: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
  };
};

const LicensingStatusFields = ({ formValues }: PropsTypes): JSX.Element => {
  const [register] = useState(() => formValues?.register);
  const errors = formValues.errors;

  return (
    <InputFile
      label={"Legal Documentation"}
      register={register("legalDocumentation", {
        required: {
          value: true,
          message: "Legal documentation must be filled in",
        },
      })}
      error={
        errors.legalDocumentation && String(errors.legalDocumentation.message)
      }
      required
    />
  );
};

export default LicensingStatusFields;
