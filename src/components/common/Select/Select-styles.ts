import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export type OptionPropsTypes = {
  bgImageUrl?: string;
};

interface ISelectStyled
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  error?: string;
  width: string;
}

export const SelectStyled = styled.select<ISelectStyled>`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width ?? "100%"};
  height: 36px;
  padding: 0 25px 0 2%;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 16px;
  color: ${Colors.INPUT_FONT_COLOR};
  background-color: ${Colors.WHITE};
  border: 2px solid ${Colors.GREY};
  outline: none;
  overflow: hidden;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: 3px solid ${Colors.LIGHT_BLUE};
  }

  &::placeholder {
    color: ${Colors.PLACEHOLDER_COLOR};
  }

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Colors.ERROR_BORDER_COLOR};
      outline: none;
    `}
`;

export const OptionStyled = styled.option<OptionPropsTypes>``;
