import { CartBlock, FlexBlock, Img, Title } from "@/components/common";
import { Map, OverviewHeadContent } from "@/components/elements";
import { IKennelDashboard } from "@/types/kennel.types";
import React, { ReactNode } from "react";

import {
  ChildrenContainer,
  DataContent,
  HeadContentContainer,
  MapAndPhotosContainer,
  MapContainer,
  PhotoContainer,
  ProfileContainer,
} from "./profileOverviewLayout-styles";

type PropsTypes<B> = {
  children: ReactNode;
  contentHeader?: ReactNode;
  dashboard: B;
  informationTitle?: string;
  informationOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
  licensingStatusOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const ProfileOverviewLayout = ({
  children,
  contentHeader,
  dashboard,
  informationTitle,
  informationOnClick,
  licensingStatusOnClick,
}: PropsTypes<IKennelDashboard>): JSX.Element => (
  <ProfileContainer>
    <CartBlock width={"100%"} height={"100%"}>
      <OverviewHeadContent
        informationTitle={informationTitle ?? dashboard.companyName}
        dashboard={dashboard}
        informationOnClick={informationOnClick}
        licenseDownloadLink="#"
        licensingStatusOnClick={licensingStatusOnClick}
        isOwner
      />
      <FlexBlock margin="2rem 0 0 0" padding="0 0 4rem 0" justify="center">
        <DataContent>
          {contentHeader && (
            <HeadContentContainer>{contentHeader}</HeadContentContainer>
          )}
          <ChildrenContainer>{children}</ChildrenContainer>

          <MapAndPhotosContainer>
            <MapContainer>
              <Map />
            </MapContainer>

            <Title type="thin">Photo</Title>

            <PhotoContainer>
              {dashboard.PhotoGallery.map((photo) => (
                <Img
                  key={photo.id}
                  width="120px"
                  height="120px"
                  src={photo.url}
                  needDisplay={true}
                />
              ))}
            </PhotoContainer>
          </MapAndPhotosContainer>
        </DataContent>
      </FlexBlock>
    </CartBlock>
  </ProfileContainer>
);

export default ProfileOverviewLayout;
