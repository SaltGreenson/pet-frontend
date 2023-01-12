import React, { useState } from "react";

import { CustomInput, InputPhone } from "@/components/common/inputs";
import {
  Control,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import Select from "@/components/common/Select";

import {
  CustomBlock,
  FlexBlock,
} from "@/components//common/Block/block-styles";

type PropsTypes = {
  defaultValues?: {
    address: string;
    city: string;
    email: string;
    phoneNumber: string;
    state: string;
    websiteLink: string;
    zip: string;
  };
  formValues: {
    control: Control<FieldValues>;
    errors: FieldErrors<FieldValues>;
    register: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
  };
};

const ContactFields = ({
  defaultValues,
  formValues,
}: PropsTypes): JSX.Element => {
  const [register] = useState(() => formValues?.register);
  const errors = formValues?.errors;

  return (
    <>
      <CustomInput
        label={"Address"}
        placeholder={"e. g. 8501 Road"}
        marginContainer={"2rem 0 0 0"}
        register={
          register &&
          register("companyAddress", {
            required: {
              value: true,
              message: "Address must be filled in",
            },
          })
        }
        defaultValue={defaultValues?.address}
        error={errors?.companyAddress && String(errors.companyAddress.message)}
        required
      />

      <InputPhone
        marginContainer={"2rem 0 0 0"}
        defaultValue={defaultValues?.phoneNumber}
        control={formValues?.control}
        errors={errors}
      />

      <FlexBlock margin={"2rem 0 0 0"}>
        <CustomBlock width={"58%"} margin={"0 1% 0 0"}>
          <CustomInput
            label={"City"}
            placeholder={"e.g. San Francisco"}
            register={
              register &&
              register("companyCity", {
                required: {
                  value: true,
                  message: "City must be filled in",
                },
              })
            }
            defaultValue={defaultValues?.city}
            error={errors?.companyCity && String(errors.companyCity.message)}
            required
          />
        </CustomBlock>

        {/*TODO: make request which will returns states of the city*/}
        <CustomBlock width={"20%"} margin={"0 1% 0 0"}>
          <Select
            elements={[]}
            label={"State"}
            register={
              register &&
              register("companyState", {
                required: {
                  value: true,
                  message: "State must be filled in",
                },
              })
            }
            defaultValue={defaultValues?.state}
            error={errors?.companyState && String(errors.companyState.message)}
            required
          />
        </CustomBlock>

        <CustomBlock width={"20%"}>
          <CustomInput
            label={"Zip"}
            required
            register={
              register &&
              register("companyZip", {
                required: {
                  value: true,
                  message: "Zip must be filled in",
                },
              })
            }
            defaultValue={defaultValues?.zip}
            error={errors?.companyZip && String(errors.companyZip.message)}
          />
        </CustomBlock>
      </FlexBlock>

      <CustomInput
        label={"Email Address"}
        placeholder={"e.g. alex@gmail.com"}
        marginContainer={"2rem 0 0 0"}
        register={
          register &&
          register("email", {
            required: {
              value: true,
              message: "Email must be filled in",
            },
          })
        }
        defaultValue={defaultValues?.email}
        error={errors?.email && String(errors.email.message)}
        required
      />

      <CustomInput
        label={"Website link"}
        placeholder={"e.g. alex@gmail.com"}
        marginContainer={"2rem 0 0 0"}
        register={
          register &&
          register("websiteLink", {
            required: {
              value: true,
              message: "Website link must be filled in",
            },
          })
        }
        defaultValue={defaultValues?.websiteLink}
        error={errors?.websiteLink && String(errors.websiteLink.message)}
        required
      />
    </>
  );
};

export default ContactFields;
