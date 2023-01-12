import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const ProfileContainer = styled.div`
  max-width: 1020px;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const DataContent = styled.div`
  width: 95%;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 372px;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

export const MapAndPhotosContainer = styled.div`
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 1024px) {
    grid-column: 1;
    margin: 0 1rem;
    grid-row: unset;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 6px;
  margin-top: 1rem;
`;

export const MapContainer = styled.div`
  height: 230px;
  width: 100%;
  margin-bottom: 3rem;
  background-color: ${Colors.DARK_GREY};

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ChildrenContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

export const HeadContentContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
`;
