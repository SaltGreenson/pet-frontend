import React from "react";

import {
  BurgerMenu,
  CustomLink,
  DropDownMenu,
  InputSearch,
  Logo,
} from "@/components/common";

import {
  BurgerMenuWrapper,
  LogoWrapper,
  MenuItemList,
  NavStyled,
} from "./Header-styles";
import { LinkType } from "@/types/common.types";
import { CustomBlock } from "@/components/common/Block/block-styles";

type HeaderProps = {
  dropDownLinks: LinkType[];
  headerLinks: LinkType[];
};

export const Header = ({
  dropDownLinks,
  headerLinks,
}: HeaderProps): JSX.Element => (
  <NavStyled>
    <BurgerMenuWrapper>
      <BurgerMenu links={headerLinks} />
    </BurgerMenuWrapper>

    <LogoWrapper>
      <Logo />
    </LogoWrapper>

    <ul>
      {headerLinks &&
        headerLinks.map((l) => (
          <MenuItemList key={l.title}>
            <CustomLink href={l.href}>{l.title}</CustomLink>
          </MenuItemList>
        ))}

      <li>
        <CustomBlock padding="0 1rem">
          <InputSearch />
        </CustomBlock>
      </li>

      <li>
        <DropDownMenu links={dropDownLinks} />
      </li>
    </ul>
  </NavStyled>
);

export default Header;
