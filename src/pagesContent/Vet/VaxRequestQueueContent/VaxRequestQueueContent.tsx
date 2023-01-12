import React, { useState } from "react";

import { Title } from "@/components/common";
import { Tabs } from "@/components/elements";

import { tabsArrayConfig } from "./config";

import { TabsContainer, VaxCardContainer } from "./VaxRequestQueue-styles";

const VaxRequestQueueContent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  return (
    <VaxCardContainer>
      <Title type={"medium"}>Queue Long View</Title>
      <TabsContainer>
        <Tabs
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          tabsArray={tabsArrayConfig}
          gap="2%"
          width="140px"
        />
      </TabsContainer>
    </VaxCardContainer>
  );
};

export default VaxRequestQueueContent;
