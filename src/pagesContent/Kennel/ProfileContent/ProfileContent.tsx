import { Title } from "@/components/common";

import ProfileOverviewLayout from "@/components/layouts/ProfileOverview/profileOverviewLayout";
import { IKennelDashboard } from "@/types/kennel.types";
import React from "react";

type PropsTypes = {
  dashboard: IKennelDashboard;
};

const ProfileContent = ({ dashboard }: PropsTypes): JSX.Element => (
  <ProfileOverviewLayout
    dashboard={dashboard}
    informationTitle="Kennel information"
    contentHeader={<Title type={"small"}>Property highlights</Title>}
  >
    {/* content */}
  </ProfileOverviewLayout>
);

export default ProfileContent;
