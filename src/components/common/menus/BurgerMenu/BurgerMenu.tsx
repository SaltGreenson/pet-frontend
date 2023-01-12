import React, { useCallback, useState } from "react";

import { CustomLink, CustomBlock } from "@/components/common";
import { LinkType } from "@/types/common.types";

import {
  BurgerBtnContainer,
  MenuBox,
  MenuBtn,
  MenuCloser,
  MenuItem,
  MenuToggle,
} from "./BurgerMenu-styles";

type PropsTypes = {
  links: LinkType[];
};

const BurgerMenu = ({ links }: PropsTypes): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  const onClickHandler = useCallback(
    (value?: boolean) => () => {
      setChecked(value ? (prev) => !prev : false);
    },
    []
  );
  return (
    <BurgerBtnContainer>
      <MenuCloser checked={checked} onClick={onClickHandler()} />
      <MenuBox checked={checked}>
        {links &&
          links.map((link) => (
            <MenuItem key={link.title} onClick={onClickHandler()}>
              <CustomLink href={link.href} fontSize="20px" bold>
                {link.title}
              </CustomLink>
            </MenuItem>
          ))}
      </MenuBox>
      <CustomBlock width="40px" maxHeight="40px">
        <MenuBtn>
          <MenuToggle
            type="checkbox"
            checked={checked}
            onChange={onClickHandler(!checked)}
          />
          <span />
          <span />
          <span />
          <span />
        </MenuBtn>
      </CustomBlock>
    </BurgerBtnContainer>
  );
};

export default BurgerMenu;
