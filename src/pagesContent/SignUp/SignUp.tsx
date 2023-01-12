import React, { useState } from "react";

import {
  CustomBlock,
  CustomLink,
  FlexBlock,
  Logo,
  Paragraph,
  Title,
} from "@/components/common";
import { Tabs } from "@/components/elements";

import { backgroundImagesConfig, tabsArrayConfig } from "./config";

import { Colors } from "@/styles/colors";
import {
  HaveAnAccountBlock,
  ImageBackgroundBlock,
  LogoBlock,
  SignUpFormBlock,
  SignUpWrapper,
} from "./signUp-styles";

const SignUp = (): JSX.Element => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <SignUpWrapper>
      <LogoBlock>
        <Logo />
      </LogoBlock>
      <ImageBackgroundBlock
        backgroundUrl={backgroundImagesConfig[activeTabIndex]}
      />
      <SignUpFormBlock>
        <FlexBlock direction="column" gap="20px">
          <Title type="medium">Create an account</Title>
          <Paragraph lineHeight="180%">
            Create an account to view and manage your profile
          </Paragraph>
        </FlexBlock>
        <CustomBlock>
          <Tabs
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
            tabsArray={tabsArrayConfig}
            width="130px"
          />
          <Paragraph lineHeight="180%">
            By creating an account you agree to our{" "}
            <CustomLink bold color={Colors.TITLE_COLOR} href="#">
              Terms of Service
            </CustomLink>{" "}
            and{" "}
            <CustomLink bold color={Colors.TITLE_COLOR} href="#">
              Privacy Policy
            </CustomLink>
            .
          </Paragraph>
          <HaveAnAccountBlock>
            <Paragraph>Have an account?</Paragraph>
            <CustomLink href={"/log-in"} color={Colors.ORANGE} bold>
              Log in
            </CustomLink>
          </HaveAnAccountBlock>
        </CustomBlock>
      </SignUpFormBlock>
    </SignUpWrapper>
  );
};

export default SignUp;
