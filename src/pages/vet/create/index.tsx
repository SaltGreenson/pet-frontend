import React from "react";
import dynamic from "next/dynamic";

import layoutConfig from "@/utils/configs/Layout";
import { MainLayout } from "@/components/layouts";
import { Preloader } from "@/components/common";

const DynamicCreateContent = dynamic(
  () => import("@/pagesContent/Vet/CreateContent"),
  {
    loading: Preloader,
  }
);

const Create = (): JSX.Element => (
  <MainLayout
    activeConfig={layoutConfig.vet}
    singleComponent={<DynamicCreateContent />}
  />
);

export default Create;
