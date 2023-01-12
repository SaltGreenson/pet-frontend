import styled from "styled-components";

import { Colors } from "@/styles/colors";

export type LabelDescriptionPropsType = {
  bold?: boolean;
  color?: Colors.ORANGE | Colors.TITLE_COLOR | Colors.LABEL_COLOR | string;
  fontSize?: "12px" | "16px" | string;
  lineHeight?: "15px" | "16px" | "21.6px" | "23px" | string;
  margin?: string;
  padding?: string;
};

export const LabelDescription = styled.label<LabelDescriptionPropsType>`
  display: block;
  position: relative;
  padding: ${({ padding = "0" }) => padding};
  margin: ${({ margin = "0 0 .5rem 0" }) => margin};
  font-size: ${({ fontSize = "16px" }) => fontSize};
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
  line-height: ${({ lineHeight = "15px" }) => lineHeight};
  color: ${({ color = Colors.LABEL_COLOR }) => color};
`;

export const SpanRequired = styled.span`
  position: absolute;
  color: ${Colors.ORANGE};
`;
