import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  Arrow,
  CustomLabel,
  ErrorLabel,
  CustomBlock,
  RelativeBlock,
} from "@/components/common";

import { dimensionConfig } from "@/components/common/Select/config";
import { OptionStyled, SelectStyled } from "./Select-styles";

type ElementType = {
  label: string;
  value: string;
};

interface IPropsTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dimension?: "little" | "large";
  elements?: ElementType[];
  error?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
}

const Select = ({
  elements,
  label,
  error,
  required,
  dimension,
  placeholder,
  register,
  defaultValue,
  ...selectProps
}: IPropsTypes): JSX.Element => (
  <CustomBlock>
    <CustomLabel required={required}>{label}</CustomLabel>
    <RelativeBlock
      maxHeight={dimensionConfig[dimension ?? "large"].maxHeight}
      width={dimensionConfig[dimension ?? "large"].width}
    >
      <Arrow />
      <SelectStyled
        defaultValue={defaultValue ?? ""}
        width={dimensionConfig[dimension ?? "large"].width}
        error={error}
        {...register}
        {...selectProps}
      >
        <OptionStyled value="" disabled hidden>
          {placeholder ?? ""}
        </OptionStyled>

        {elements &&
          elements.map((el) => (
            <OptionStyled value={el.value} key={el.value}>
              {el.label}
            </OptionStyled>
          ))}
      </SelectStyled>
      {error && required && <ErrorLabel>{error}</ErrorLabel>}
    </RelativeBlock>
  </CustomBlock>
);

export default Select;
