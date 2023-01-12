import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const PersonalMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const UpdateTextContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const UpdateTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VaccinationsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const VaxCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 10px;
`;

export const VaxRequestUpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const ViewMoreTitle = styled.p`
  color: ${Colors.TITLE_COLOR};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
