import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const ErrorLabelStyled = styled.label<{ display?: "inline-block" }>`
  margin-top: 5px;
  font-size: 14px;
  color: ${Colors.ERROR_COLOR};
`;
