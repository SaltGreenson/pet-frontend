import styled from "styled-components";

export const StyledTextBlockContainer = styled.div<{ maxWidth?: string }>`
  display: inline-block;
  max-width: ${({ maxWidth = "200px" }) => maxWidth};
  hyphens: auto;
`;
