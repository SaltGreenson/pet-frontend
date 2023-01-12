import React from "react";

import { CustomLink, CustomBlock } from "@/components/common";

import { Colors } from "@/styles/colors";

type LinksTypes = {
  href: string;
  isActive?: boolean;
  title: string;
};

interface PropsTypes extends React.BaseHTMLAttributes<HTMLDivElement> {
  link: LinksTypes;
}

const MenuLink = ({ link, ...props }: PropsTypes): JSX.Element => (
  <CustomBlock margin="0 0 40px 80px" width="180px" {...props}>
    <CustomLink
      href={link.href}
      color={link.isActive ? Colors.ORANGE : Colors.TITLE_COLOR}
      lineHeight={"23px"}
      bold
    >
      {link.title}
    </CustomLink>
  </CustomBlock>
);

export default MenuLink;
