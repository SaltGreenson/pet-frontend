import React from "react";

import { UseFormRegisterReturn } from "react-hook-form";

import { StyledSearchInput } from "./InputSearch-styles";

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
}

const InputSearch = ({ register, ...props }: InputSearchProps): JSX.Element => (
  <StyledSearchInput {...register} {...props} />
);

export default InputSearch;
