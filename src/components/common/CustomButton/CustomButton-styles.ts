import styled from "styled-components";

import { Colors } from "@/styles/colors";

export type ButtonTypes = {
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  border?: string;
  background?: string;
  buttonType: "primary" | "outline" | "text";
};

export const PrimaryButtonStyled = styled.button<ButtonTypes>`
  width: ${({ width = "255px" }) => width};
  min-height: ${({ height = "55px" }) => height};
  font-size: ${({ fontSize = "18px" }) => fontSize};
  background: ${({ background = Colors.TITLE_COLOR }) => background};
  color: ${({ color = Colors.WHITE }) => color};
  border: ${({ border = "none" }) => border};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

export const OutLineButtonStyled = styled.button<ButtonTypes>`
  width: ${({ width = "255px" }) => width};
  min-height: ${({ height = "55px" }) => height};
  font-size: ${({ fontSize = "18px" }) => fontSize};
  background: none;
  color: ${({ color = Colors.ORANGE }) => color};
  border: ${({ border = `5px solid ${Colors.ORANGE}` }) => border};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

export const TextButtonStyled = styled.button<ButtonTypes>`
  width: ${({ width }) => width || "255px"};
  min-height: ${({ height }) => height || "55px"};
  font-size: ${({ fontSize }) => fontSize || "18px"};
  color: ${({ color }) => color || Colors.BLUE};
  background: ${({ background }) => background || "none"};
  border: ${({ border }) => border || "none"};
  border-radius: 20px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    transform: scale(1.01);
  }
`;
