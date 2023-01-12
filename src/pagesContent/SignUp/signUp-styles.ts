import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const SignUpWrapper = styled.div`
  display: grid;
  position: relative;
  max-width: 2300px;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  margin: auto auto;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 5%;
  }
  @media (min-width: 2300px) {
    border-left: 2px solid ${Colors.WHITE_BORDER};
    border-right: 2px solid ${Colors.WHITE_BORDER};
  }
`;

export const ImageBackgroundBlock = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  height: 100%;
  background: no-repeat url(../${({ backgroundUrl }) => backgroundUrl}) center;
  background-size: cover;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SignUpFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 45px;
  padding: 0 25% 0 20%;
  margin-top: 20px;
  @media (max-width: 1440px) {
    padding: 0 5% 5%;
    gap: 25px;
  }
`;

export const HaveAnAccountBlock = styled.div`
  display: flex;
  position: absolute;
  right: 50px;
  top: 34px;
  @media (max-width: 1024px) {
    position: relative;
    left: unset;
    right: unset;
    justify-content: center;
  }
`;

export const LogoBlock = styled.div`
  position: absolute;
  top: 3%;
  left: 5%;
  @media (max-width: 1024px) {
    position: relative;
    margin: 20px 0;
  }
`;
