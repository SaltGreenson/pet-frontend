import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 80px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  & > ul {
    display: flex;
    list-style: none;
  }

  ul > li {
    display: flex;
    align-items: center;
    padding-right: 3rem;
  }

  @media (max-width: 768px) {
    height: 60px;
    ul > li {
      padding-right: 1rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuItemList = styled.li`
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const BurgerMenuWrapper = styled.div`
  display: none;
  position: absolute;
  left: 5px;
  top: 15px;

  @media (max-width: 768px) {
    display: block;
  }
`;
