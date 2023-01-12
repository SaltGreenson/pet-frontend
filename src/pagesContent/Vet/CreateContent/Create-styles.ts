import styled from "styled-components";

export const EditProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const ContentWrapper = styled.div`
  grid-column: 1;
`;

export const SubmitBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
