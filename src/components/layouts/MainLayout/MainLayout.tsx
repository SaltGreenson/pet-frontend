import React, { ReactNode, useCallback, useState } from "react";

import { ConfigTypes } from "@/types/common.types";
import Footer from "../../elements/Footer";
import { headerConfig } from "../../../utils/configs";
import Header from "../../elements/Header";
import { MenuLink } from "../../common/links";
import Title from "../../common/Title";

import {
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  MainLayoutContainer,
  MenuContainer,
  TitleContainer,
} from "./MainLayout-styles";

type PropsTypes = {
  activeHrefIndex?: number;
  activeConfig: ConfigTypes;
  singleComponent?: ReactNode;
};
const MainLayout = ({
  activeHrefIndex,
  activeConfig,
  singleComponent,
}: PropsTypes): JSX.Element => {
  // TODO: Get activeTabIndex from redux
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    activeHrefIndex ?? 0
  );

  const [content] = useState(() => activeConfig.layout);
  const [dropDownMenuLinks] = useState(() => activeConfig.dropDown);

  const onClickHandler = useCallback(
    (value: number) => () => {
      setActiveTabIndex(value);
    },
    []
  );

  return (
    <MainLayoutContainer>
      <HeaderContainer>
        <Header headerLinks={headerConfig} dropDownLinks={dropDownMenuLinks} />
      </HeaderContainer>

      <TitleContainer>
        <Title type={"large"}> {content[activeTabIndex].title} </Title>
      </TitleContainer>

      <MenuContainer>
        {content &&
          content.map(({ href, hrefTitle }, index) => (
            <MenuLink
              key={`${hrefTitle}_${href}`}
              onClick={onClickHandler(index)}
              link={{
                href,
                title: hrefTitle,
                isActive: index === activeTabIndex,
              }}
            />
          ))}
      </MenuContainer>

      <ContentContainer>
        {singleComponent ?? content[activeTabIndex].component}
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
