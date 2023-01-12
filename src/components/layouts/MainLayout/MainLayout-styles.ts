import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem auto 5%;
  grid-template-rows: 80px 4rem 31px 3rem auto 5rem 20rem;
  max-width: 1420px;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 1400px) {
    border-right: 2px solid ${Colors.WHITE_BORDER};
    border-left: 2px solid ${Colors.WHITE_BORDER};
  }

  @media (max-width: 768px) {
    grid-template-rows: 60px 4rem 31px 3rem auto 5rem 20rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 5% 90% 5%;
  }
`;

export const TitleContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
`;

export const ContentContainer = styled.div`
  grid-column: 2;
  grid-row: 5;
`;

export const MenuContainer = styled.div`
  grid-column: 1;
  grid-row: 3 / span 5;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
`;

export const FooterContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 7;
`;
