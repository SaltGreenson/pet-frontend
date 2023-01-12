import React from "react";
import Image from "next/image";

import {
  AbsoluteBlock,
  CustomLink,
  Logo,
  Paragraph,
  Title,
} from "@/components/common";
import { LoginForm } from "@/components/forms";
import {
  CreateAccountLinkWrap,
  GridMainBlock,
  ImageWrap,
  LogInFormWrap,
  TitleWrap,
} from "./logIn-styles";
import { Colors } from "@/styles/colors";

const Index = () => (
  <GridMainBlock>
    <AbsoluteBlock>
      <Logo />
    </AbsoluteBlock>

    <ImageWrap>
      <Image
        src="/LogIn/logInDog.png"
        width={1000}
        height={2000}
        alt="dog image"
      />
    </ImageWrap>

    <LogInFormWrap>
      <TitleWrap>
        <Title type="large">Log In to Your account</Title>
      </TitleWrap>
      <LoginForm />
      <CreateAccountLinkWrap>
        <Paragraph>Not registered yet?</Paragraph>
        <CustomLink href={"/sign-up"} color={Colors.ORANGE} bold>
          Create your account
        </CustomLink>
      </CreateAccountLinkWrap>
    </LogInFormWrap>
  </GridMainBlock>
);

export default Index;
