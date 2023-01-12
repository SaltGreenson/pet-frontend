import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export interface StyledInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  width?: string;
}

export const InputStyled = styled.input<StyledInputProps>`
  width: ${({ width }) => width ?? "100%"};
  height: 36px;
  padding: 1rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${Colors.INPUT_FONT_COLOR};
  border: 2px solid ${Colors.GREY};

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Colors.ERROR_BORDER_COLOR};
      outline: none;
    `}
  &:focus {
    outline: 3px solid ${Colors.LIGHT_BLUE};
  }

  &::placeholder {
    color: ${Colors.PLACEHOLDER_COLOR};
  }
`;
