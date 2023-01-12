import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const GridMainBlock = styled.div`
  max-width: 2300px;
  max-height: 100vh;
  margin: auto auto;
  display: grid;
  grid-template-columns: 45% 12% 31% 12%;
  position: relative;
  align-items: center;
  overflow: hidden;

  @media (min-width: 1024px) {
    border-left: 2px solid ${Colors.WHITE_BORDER};
    border-right: 2px solid ${Colors.WHITE_BORDER};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 10vh 80vh 10vh;
  }
`;

export const CreateAccountLinkWrap = styled.div`
  display: flex;
  grid-column: 3 / span 4;
  position: absolute;
  right: 72px;
  top: 34px;
  @media (max-width: 1024px) {
    position: relative;
    justify-content: center;
    grid-column: 2;
    grid-row: 2;
    left: unset;
    right: unset;
  }
`;

export const ImageWrap = styled.div`
  grid-column: 1;

  & > img {
    min-height: 101vh;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TitleWrap = styled.div`
  grid-row: 1;
  white-space: nowrap;
`;

export const LogInFormWrap = styled.div`
  grid-column: 3;

  @media (max-width: 1024px) {
    grid-row: 2;
    grid-column: 2;
  }
`;
