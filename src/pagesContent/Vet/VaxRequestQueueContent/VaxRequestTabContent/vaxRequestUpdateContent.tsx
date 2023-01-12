import React from "react";

import {
  Checkbox,
  CustomLink,
  DoubleAvatar,
  FlexBlock,
  Paragraph,
} from "@/components/common";

import { Colors } from "@/styles/colors";
import {
  PersonalMainInfo,
  UpdateTextBlock,
  UpdateTextContainer,
  VaccinationsBlock,
  VaxRequestUpdateContainer,
} from "../VaxRequestQueue-styles";

const VaxRequestUpdateContent = () => (
  <VaxRequestUpdateContainer>
    <PersonalMainInfo>
      <DoubleAvatar
        firstAvatarBackground="../Icons/personIcon.svg"
        secondAvatarBackground="../Icons/animalIcon.svg"
      />
      <div>
        <FlexBlock>
          <Paragraph fontSize="14px" color={Colors.ORANGE} bold={true}>
            (C)
          </Paragraph>
          <Paragraph
            fontSize="14px"
            color={Colors.LIGHT_BLACK}
            bold={true}
            margin="0 0 16px 0"
          >
            ID 12345
          </Paragraph>
        </FlexBlock>
        <CustomLink fontSize="14px" color={Colors.BLUE} href="#">
          View profile
        </CustomLink>
      </div>
      <UpdateTextBlock>
        <UpdateTextContainer>
          <Paragraph fontSize="14px" color={Colors.MEDIUM_GREY}>
            Dog
          </Paragraph>
          <Paragraph fontSize="14px" bold={true}>
            Robert
          </Paragraph>
        </UpdateTextContainer>
        <UpdateTextContainer>
          <Paragraph fontSize="14px" color={Colors.MEDIUM_GREY}>
            Owner
          </Paragraph>
          <Paragraph fontSize="14px" bold={true}>
            Rax
          </Paragraph>
        </UpdateTextContainer>
      </UpdateTextBlock>
      <Paragraph>Time Stamp: 04/10/2022</Paragraph>
    </PersonalMainInfo>
    <VaccinationsBlock>
      <Paragraph color={Colors.TITLE_COLOR} fontSize="16px" margin="0 0 26px 0">
        Core Vaccination
      </Paragraph>
      <Checkbox label="Rabies" />
      <Checkbox label="Distemper" />
      <Checkbox label="Parvovirus" />
      <Checkbox label="Adenovirus (type 1)" />
      <Checkbox label="Adenovirus (type 2)" />
    </VaccinationsBlock>
    <VaccinationsBlock>
      <Paragraph color={Colors.TITLE_COLOR} fontSize="16px" margin="0 0 26px 0">
        Non-Core Vaccination
      </Paragraph>
      <Checkbox label="Bordetella" />
      <Checkbox label="Lyme Disease" />
      <Checkbox label="Leptospirosis" />
      <Checkbox label="Parainfluenza" />
      <Checkbox label="Canine Influenza" />
    </VaccinationsBlock>
    <Checkbox label="I certify that these records are legitimate and up to date." />
  </VaxRequestUpdateContainer>
);

export default VaxRequestUpdateContent;
