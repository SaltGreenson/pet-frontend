import styled from "styled-components";

import { Colors } from "@/styles/colors";

export interface StyledAPropsTypes {
  bold?: boolean;
  color?: Colors.ORANGE | Colors.LINK_COLOR | Colors.LABEL_COLOR | string;
  lineHeight?: "15px" | "16px" | "21.6px" | "23px" | string;
  fontSize?: "12px" | "16px" | string;
  fontWidth?: string;
}

export const StyledA = styled.a<StyledAPropsTypes>`
  font-size: ${({ fontSize = "16px" }) => fontSize};
  font-weight: ${({ bold, fontWidth }) => (bold ? "500" : fontWidth ?? "400")};
  line-height: ${({ lineHeight = "15px" }) => lineHeight};
  color: ${({ color = Colors.LINK_COLOR }) => color};
  cursor: pointer;
`;
