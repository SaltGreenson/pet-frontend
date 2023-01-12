import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

import { CustomLabel, CustomBlock, ErrorLabel } from "@/components/common";
import { isPhoneNumberEmptyHelpers } from "@/utils/helpers/isPhoneNumberEmpty.helpers";

import { Colors } from "@/styles/colors";
import { ErrorBorder } from "./InputPhone-styles";

interface InputPhoneProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  defaultValue?: string;
  marginContainer?: ".5rem 0 0 0" | "0 0 0 .5rem" | string;
}

const InputPhone = ({
  control,
  errors,
  defaultValue,
  marginContainer,
}: InputPhoneProps): JSX.Element => (
  <CustomBlock margin={marginContainer}>
    <CustomLabel required>Phone number</CustomLabel>
    <Controller
      name="phoneNumber"
      control={control}
      rules={{
        validate: (value = defaultValue) => isPhoneNumberEmptyHelpers(value),
      }}
      render={({ field: { onChange, value = defaultValue } }) => (
        <ErrorBorder error={errors && errors["phoneNumber"] && " "}>
          <PhoneInput
            value={value}
            onChange={onChange}
            inputStyle={{
              width: "100%",
              border: `2px solid ${Colors.GREY}`,
              borderRadius: "0",
            }}
            buttonStyle={{
              border: `2px solid ${Colors.GREY}`,
              borderRadius: "0",
            }}
          />
        </ErrorBorder>
      )}
    />
    <CustomBlock margin=".5rem 0 0 0">
      {errors && errors["phoneNumber"] && (
        <ErrorLabel>Invalid phone number</ErrorLabel>
      )}
    </CustomBlock>
  </CustomBlock>
);

export default InputPhone;
