import { IKennelDashboard } from "@/types/kennel.types";
import React from "react";

import {
  CustomLink,
  CustomBlock,
  LabelValue,
  Img,
  Paragraph,
  Title,
} from "@/components/common";

import { Colors } from "@/styles/colors";
import {
  DescriptionContainer,
  HeadContainer,
  ImageContainer,
} from "./OverviewHeadContent-styles";

interface PropsTypes extends React.BaseHTMLAttributes<HTMLDivElement> {
  dashboard: IKennelDashboard;
  licenseDownloadLink: string;
  informationTitle: string;
  isOwner: boolean;
  informationOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
  licensingStatusOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const OverviewHeadContent = ({
  dashboard,
  isOwner,
  informationTitle,
  licenseDownloadLink,
  informationOnClick,
  licensingStatusOnClick,
}: PropsTypes): JSX.Element => {
  const {
    address,
    animalType,
    companyName,
    certifiedBy,
    profilePhoto,
    phoneNumber,
    isUpToDate,
    User,
    websiteLink,
  } = dashboard;

  return (
    <HeadContainer>
      <ImageContainer>
        <Img
          size="medium"
          src={profilePhoto}
          alt="profile photo"
          needDisplay={true}
        />
      </ImageContainer>

      <DescriptionContainer>
        <CustomBlock margin="0 0 1.5rem 0">
          <Title
            type={isOwner ? "edit" : "thin"}
            onClick={informationOnClick}
            fontSize="14px"
          >
            {informationTitle}
          </Title>
        </CustomBlock>

        <LabelValue
          label="Name company"
          value={companyName}
          marginContainer="0 0 1rem 0"
          isBoldLabel
          isBoldValue
        />

        {animalType && (
          <LabelValue
            label="Type of animals"
            value={animalType}
            marginContainer="0 0 1rem 0"
            isBoldLabel
            isBoldValue
          />
        )}

        <LabelValue
          label="Phone"
          value={phoneNumber}
          marginContainer="0 0 1rem 0"
          isBoldLabel
          isBoldValue
        />

        <LabelValue
          label="Email"
          value={User.email}
          marginContainer="0 0 1rem 0"
          isBoldLabel
          isBoldValue
        />

        <LabelValue
          label="Website"
          value={websiteLink}
          marginContainer="0 0 1rem 0"
          isValueUrl
          isBoldLabel
          isBoldValue
        />

        <LabelValue
          label="Address"
          value={address}
          marginContainer="0 0 1rem 0"
          isBoldLabel
          isBoldValue
        />
      </DescriptionContainer>

      <DescriptionContainer width="250px" needBorder>
        <CustomBlock margin="0 0 2rem 0">
          <Title
            type={isOwner ? "edit" : "thin"}
            onClick={licensingStatusOnClick}
            fontSize="14px"
          >
            Licensing status
          </Title>
        </CustomBlock>

        <CustomBlock margin="0 0 .5rem 0">
          {isUpToDate ? (
            <Paragraph
              outlinedFontColor={Colors.GREEN}
              outlinedBgColor={Colors.LIGHT_GREEN}
              isOutlined
            >
              Up to date
            </Paragraph>
          ) : (
            <Paragraph
              outlinedFontColor={Colors.RED}
              outlinedBgColor={Colors.LIGHT_RED}
              bold
              isOutlined
            >
              Ended
            </Paragraph>
          )}
        </CustomBlock>

        <CustomBlock margin="0 0 1rem 0">
          <Paragraph variant="small" color={Colors.ORANGE} bold>
            {certifiedBy}
          </Paragraph>
        </CustomBlock>

        <CustomBlock margin="0 0 1rem 0">
          <CustomLink
            target="_blank"
            fontSize="14px"
            color={Colors.BLUE}
            href={licenseDownloadLink}
          >
            State license PDF Download
          </CustomLink>
        </CustomBlock>
      </DescriptionContainer>
    </HeadContainer>
  );
};

export default OverviewHeadContent;
