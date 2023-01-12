import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export const ErrorBorder = styled.div<{ error?: string }>`
  display: inline-block;
  width: 100%;

  &:focus {
    outline: 3px solid ${Colors.LIGHT_BLUE};
  }

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Colors.ERROR_BORDER_COLOR};
      outline: none;
    `}
`;
