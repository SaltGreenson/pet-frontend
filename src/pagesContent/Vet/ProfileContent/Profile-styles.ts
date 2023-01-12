import styled from "styled-components";

export const MedicalStaffContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-right: 2rem;
  gap: 15px;

  @media (max-width: 1024px) {
    margin: 0 1rem 2rem 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const MedicalStaffTitleContainer = styled.div`
  width: 150px;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;
