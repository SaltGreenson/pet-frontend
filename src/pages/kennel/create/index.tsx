import React from "react";
import dynamic from "next/dynamic";

import layoutConfig from "@/utils/configs/Layout";
import { MainLayout } from "@/components/layouts";
import Preloader from "@/components/common/Preloader";

const DynamicCreateContent = dynamic(
  () => import("@/pagesContent/Kennel/CreateContent"),
  {
    loading: Preloader,
  }
);

const Create = (): JSX.Element => (
  <MainLayout
    activeConfig={layoutConfig.kennel}
    singleComponent={<DynamicCreateContent />}
  />
);

export default Create;
