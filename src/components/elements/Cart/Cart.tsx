import React, { useCallback, useState } from "react";

import { VeterinarianCredentials } from "@/types/vet.types";

import {
  CustomLink,
  CustomBlock,
  FlexBlock,
  Img,
  Paragraph,
} from "@/components/common";

import {
  CartContainer,
  StyledCredentialsDropDown,
  ViewCredentialsWrap,
} from "./Cart-styles";
import { Colors } from "@/styles/colors";

type PropsTypes = {
  abbreviatedCredentials?: string;
  credentials?: VeterinarianCredentials;
  firstName?: string;
  id?: string;
  lastName?: string;
  photo?: string;
  position?: string;
};

const Cart = ({
  abbreviatedCredentials,
  credentials,
  firstName,
  id,
  lastName,
  photo,
  position,
}: PropsTypes): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onClickHandler = useCallback(
    (value: boolean) => () => {
      setClicked(value);
    },
    []
  );

  return (
    <CustomBlock width="265px" maxHeight="345px">
      <CartContainer clicked={clicked}>
        <FlexBlock justify="center" padding="1rem 0 1.5rem 0">
          <CustomLink href={`/vet/staff/${id ?? ""}`}>
            <Img size="small" src={photo} />
          </CustomLink>
        </FlexBlock>

        <FlexBlock justify="center">
          <CustomLink
            color={Colors.TITLE_COLOR}
            lineHeight={"16px"}
            href={`/vet/staff/${id ?? ""}`}
            bold
          >
            {`${firstName ?? "first name"} ${lastName ?? "last name"},${
              abbreviatedCredentials ?? "abbr"
            }`}
          </CustomLink>
        </FlexBlock>

        <FlexBlock justify={"center"} margin={".7rem 0 0 0"}>
          <Paragraph
            color={Colors.TITLE_COLOR}
            fontSize={"14px"}
            lineHeight={"16px"}
          >
            {position ?? "Position"}
          </Paragraph>
        </FlexBlock>

        <StyledCredentialsDropDown clicked={clicked}>
          <ViewCredentialsWrap>
            <Paragraph
              onClick={onClickHandler(!clicked)}
              color={Colors.ORANGE}
              bold
            >
              View Credentials
            </Paragraph>
          </ViewCredentialsWrap>
          <li>
            <Paragraph color={Colors.TITLE_COLOR} bold>
              {credentials}
            </Paragraph>
          </li>
        </StyledCredentialsDropDown>
      </CartContainer>
    </CustomBlock>
  );
};

export default Cart;
