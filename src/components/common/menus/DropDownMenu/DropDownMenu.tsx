import React, { useCallback, useState } from "react";
import Image from "next/image";

import {
  Arrow,
  CustomLink,
  CircleBlock,
  RelativeBlock,
} from "@/components/common";
import { DropDownLinksType } from "@/types/common.types";
import { CircleBlockTypes } from "@/components/common/Block/block-styles";

import { StyledDropDownMenu } from "./DropDownMenu-styles";
import { MenuCloser } from "../BurgerMenu/BurgerMenu-styles";
import { Colors } from "@/styles/colors";

type PropsTypes = {
  imageUrl?: string;
  links: DropDownLinksType[];
};

const DropDownMenu = ({
  imageUrl,
  links,
  ...circleProps
}: CircleBlockTypes & PropsTypes): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onClickHandler = useCallback(
    (value: boolean) => () => {
      setClicked(value);
    },
    []
  );

  return (
    <RelativeBlock padding="0 2rem 0 0">
      <MenuCloser checked={clicked} onClick={onClickHandler(false)} />
      <CircleBlock {...circleProps}>
        {imageUrl && (
          <Image src={imageUrl} width={40} height={40} alt="Avatar" />
        )}
      </CircleBlock>

      <Arrow
        size="8px"
        color={Colors.LINK_COLOR}
        hasPointerEvents={true}
        onClick={onClickHandler(!clicked)}
        clicked={clicked}
      />

      <StyledDropDownMenu clicked={clicked}>
        <ul>
          {links &&
            links.map((link) => (
              <li key={link.title}>
                <CustomLink
                  color={Colors.LINK_COLOR}
                  lineHeight="23px"
                  href={link.href}
                  bold
                >
                  {link.title}
                </CustomLink>
              </li>
            ))}

          <li>
            <CustomLink
              color={Colors.LINK_COLOR}
              lineHeight="23px"
              href="#"
              bold
            >
              Sign Out
            </CustomLink>
          </li>
        </ul>
      </StyledDropDownMenu>
    </RelativeBlock>
  );
};

export default DropDownMenu;
