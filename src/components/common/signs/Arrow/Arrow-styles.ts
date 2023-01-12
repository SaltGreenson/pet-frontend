import styled, { css } from "styled-components";

import { ArrowPropsTypes } from "./Arrow";

import { Colors } from "@/styles/colors";

export const ArrowStyled = styled.div<ArrowPropsTypes>`
  z-index: 100;
  transition: 0.3s ease-in;
  border-top: ${({ size = "6px" }) => size} solid
    ${({ color }) => color ?? Colors.BLACK};
  border-right: ${({ size = "6px" }) => size} solid transparent;
  border-left: ${({ size = "6px" }) => size} solid transparent;
  pointer-events: ${({ hasPointerEvents }) =>
    hasPointerEvents ? "unset" : "none"};

  ${({ isRelative }) =>
    !isRelative &&
    css`
      position: absolute;
      top: 40%;
      right: 10px;
    `}

  ${({ hasPointerEvents }) =>
    hasPointerEvents &&
    css`
      z-index: 1;
      cursor: pointer;
    `}

  ${({ clicked }) =>
    clicked &&
    css`
      transform: rotate(-180deg);
    `}
`;
