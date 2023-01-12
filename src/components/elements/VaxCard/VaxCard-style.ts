import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const ButtonContainer = styled.div`
  width: 187px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  position: relative;
  border-left: 1px solid ${Colors.LIGHT_GREY};
  height: 86%;
  top: 7%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const IdentityBlock = styled.div`
  display: flex;
`;

export const TabContainer = styled.div`
  width: 150px;
`;

export const VaxCardBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr 1fr;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  width: 100%;
  min-height: 246px;
  padding: 24px 5%;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0fr;
  }
`;

export const VaxCardInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 13px;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const VaxCardInfoBlockStart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 13px;
`;

export const VaxCardLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 5%;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const VaxCardLeftBlockInfo = styled.div`
  display: flex;
  gap: 5%;
`;

export const VaxCardRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const VaxCardLeftBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 25px;
`;

export const VaxTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;
