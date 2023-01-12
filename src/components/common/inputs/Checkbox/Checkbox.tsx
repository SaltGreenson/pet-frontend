import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  CustomLabel,
  CustomBlock,
  ErrorLabel,
  FlexBlock,
  RelativeBlock,
} from "@/components/common";

import { GeekMark, StyledCheckbox } from "./Checkbox-styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  bold?: boolean;
  error?: string;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
}

const Checkbox = ({
  bold,
  error,
  label,
  required,
  register,
  ...props
}: CheckboxProps): JSX.Element => (
  <CustomBlock width="unset">
    <FlexBlock align="center">
      <RelativeBlock maxHeight="25px" width="25px">
        <StyledCheckbox type="checkbox" {...register} {...props} />
        <GeekMark error={error} />
      </RelativeBlock>
      <CustomLabel
        required={required}
        lineHeight={""}
        margin="0 0 0 .5rem"
        bold={bold}
      >
        <>{label}</>
      </CustomLabel>
    </FlexBlock>
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </CustomBlock>
);

export default Checkbox;
