import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CustomLabel, CustomBlock, ErrorLabel } from "@/components/common";

import { InputStyled } from "./CustomInput-style";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  marginContainer?: ".5rem 0 0 0" | "0 0 0 .5rem" | string;
  register?: UseFormRegisterReturn<string>;
  width?: "5rem" | "12rem" | "21.4rem" | string;
}

const CustomInput = ({
  error,
  label,
  marginContainer,
  required,
  register,
  width,
  ...inputProps
}: CustomInputProps): JSX.Element => (
  <CustomBlock margin={marginContainer}>
    {label && <CustomLabel required={required}>{label}</CustomLabel>}
    <CustomBlock width={width}>
      <InputStyled width={width} error={error} {...register} {...inputProps} />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </CustomBlock>
  </CustomBlock>
);

export default CustomInput;
