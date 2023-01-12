import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledLarge = styled.h2`
  font-family: "Gotham Pro Bold", serif;
  font-size: 36px;
  line-height: 35px;
  color: ${Colors.TITLE_COLOR};

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

export const StyledMedium = styled.h3`
  padding-top: 2px;
  font-family: "Gotham Pro Bold", serif;
  font-size: 24px;
  line-height: 23px;
  color: ${Colors.TITLE_COLOR};
`;

export const StyledSmall = styled.h4<{ fontSize?: string }>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "20px" }) => fontSize};
  line-height: 19px;
  color: ${Colors.TITLE_COLOR};
`;

export const StyledSmallThin = styled(StyledSmall)`
  padding-top: 2px;
  font-family: "Gotham Pro Medium", serif;
  font-weight: 500;
`;
