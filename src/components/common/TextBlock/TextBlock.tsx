import React from "react";

import { CustomLink, CustomBlock, Paragraph } from "@/components/common";

import { LinkType, TextBlockElementType } from "@/types/common.types";

import { Colors } from "@/styles/colors";
import { StyledTextBlockContainer } from "./textBlock-styles";

type TextBlockProps = {
  title: string;
  links?: LinkType[];
  titleFontSize?: string;
  text?: TextBlockElementType[];
  containerMaxWidth?: string;
};

const TextBlock = ({
  containerMaxWidth,
  links,
  title,
  text,
  titleFontSize,
}: TextBlockProps): JSX.Element => {
  const displayText = (text: string) => (
    <CustomBlock margin="0 0 .7rem 0">
      <Paragraph color={Colors.TITLE_COLOR} fontWidth="300" fontSize={"14px"}>
        {text}
      </Paragraph>
    </CustomBlock>
  );

  const displayLink = (title: string, href: string) => (
    <CustomBlock margin="0 0 .7rem 0">
      <CustomLink color={Colors.TITLE_COLOR} href={href} fontWidth="300">
        {title}
      </CustomLink>
    </CustomBlock>
  );
  return (
    <StyledTextBlockContainer maxWidth={containerMaxWidth}>
      <CustomBlock margin="0 0 1rem 0">
        <Paragraph
          color={Colors.TITLE_COLOR}
          fontSize={titleFontSize ?? "14px"}
          bold
        >
          {title}
        </Paragraph>
      </CustomBlock>

      {links
        ? links.map(({ title, href }) => displayLink(title, href))
        : text && text.map(({ description }) => displayText(description))}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
