import React from "react";

import {
  CustomButton,
  CustomLink,
  DoubleAvatar,
  Paragraph,
} from "@/components/common";

import {
  ButtonContainer,
  Divider,
  IdentityBlock,
  TabContainer,
  VaxCardBlock,
  VaxTextContainer,
  VaxCardInfoBlock,
  VaxCardInfoBlockStart,
  VaxCardLeftBlock,
  VaxCardLeftBlockInfo,
  VaxCardLeftWrapper,
  VaxCardRightWrapper,
} from "./VaxCard-style";
import { Colors } from "@/styles/colors";

export type VaxCardType = {
  firstAvatarBackground: string;
  id: string;
  ownerName: string;
  profileLink: string;
  petType: string;
  petName: string;
  requestedTime: string;
  secondAvatarBackground: string;
  vetPassportLink: string;
  onSend?: () => void;
  onUpdate?: () => void;
};

const VaxCard = (vaxCardProps: VaxCardType) => {
  const {
    firstAvatarBackground,
    id,
    onSend,
    onUpdate,
    ownerName,
    profileLink,
    petType,
    petName,
    requestedTime,
    secondAvatarBackground,
    vetPassportLink,
  } = vaxCardProps;
  return (
    <VaxCardBlock>
      <VaxCardLeftWrapper>
        <VaxCardLeftBlock>
          <IdentityBlock>
            <Paragraph fontSize="14px" color={Colors.ORANGE} bold={true}>
              ({petType[0]})
            </Paragraph>
            <Paragraph
              fontSize="14px"
              color={Colors.LIGHT_BLACK}
              bold={true}
              style={{ whiteSpace: "nowrap" }}
            >
              ID {id}
            </Paragraph>
          </IdentityBlock>
          <DoubleAvatar
            firstAvatarBackground={firstAvatarBackground}
            secondAvatarBackground={secondAvatarBackground}
          />
          <CustomLink fontSize="14px" color={Colors.BLUE} href={profileLink}>
            View profile
          </CustomLink>
        </VaxCardLeftBlock>

        <VaxCardLeftBlockInfo>
          <VaxCardLeftBlock>
            <VaxCardInfoBlockStart>
              <VaxTextContainer>
                <Paragraph fontSize="14px" color={Colors.MEDIUM_GREY}>
                  {petType}
                </Paragraph>
                <Paragraph fontSize="14px" bold={true}>
                  {petName}
                </Paragraph>
              </VaxTextContainer>
              <VaxTextContainer>
                <Paragraph fontSize="14px" color={Colors.MEDIUM_GREY}>
                  Owner
                </Paragraph>
                <Paragraph fontSize="14px" bold={true}>
                  {ownerName}
                </Paragraph>
              </VaxTextContainer>
            </VaxCardInfoBlockStart>
            <VaxCardInfoBlockStart>
              <Paragraph fontSize="14px" color={Colors.MEDIUM_GREY}>
                Vax Status
              </Paragraph>
            </VaxCardInfoBlockStart>
            <VaxCardInfoBlockStart>
              <TabContainer>
                <Paragraph
                  outlinedFontColor={Colors.MEDIUM_ORANGE}
                  outlinedBgColor={Colors.LIGHT_ORANGE}
                  fontSize={"12px"}
                  bold
                  isOutlined
                >
                  Lorem ipsum
                </Paragraph>
              </TabContainer>
            </VaxCardInfoBlockStart>
            <VaxCardInfoBlockStart>
              <Paragraph fontSize="14px" color={Colors.TITLE_COLOR}>
                Lorem ipsum
              </Paragraph>
              <Paragraph fontSize="14px" color={Colors.TITLE_COLOR}>
                Lorem ipsum
              </Paragraph>
            </VaxCardInfoBlockStart>
          </VaxCardLeftBlock>
        </VaxCardLeftBlockInfo>
      </VaxCardLeftWrapper>

      <Divider />

      <VaxCardRightWrapper>
        <VaxCardInfoBlock>
          <CustomLink
            fontSize="14px"
            color={Colors.BLUE}
            href={vetPassportLink}
          >
            View vet passport
          </CustomLink>
          <Paragraph fontSize="14px">Requested: {requestedTime}</Paragraph>
        </VaxCardInfoBlock>
        <VaxCardInfoBlock>
          <ButtonContainer>
            <CustomButton width="100%" buttonType="outline" onClick={onUpdate}>
              Update
            </CustomButton>
          </ButtonContainer>
          <ButtonContainer>
            <CustomButton width="100%" buttonType="primary" onClick={onSend}>
              Send
            </CustomButton>
          </ButtonContainer>
        </VaxCardInfoBlock>
      </VaxCardRightWrapper>
    </VaxCardBlock>
  );
};

export default VaxCard;
