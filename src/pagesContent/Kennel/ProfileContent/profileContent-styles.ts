import styled from "styled-components";

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 115px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;
