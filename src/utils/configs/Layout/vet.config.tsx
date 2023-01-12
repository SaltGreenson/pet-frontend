import React from "react";
import dynamic from "next/dynamic";

import { Preloader } from "@/components/common";
import { ConfigTypes } from "@/types/common.types";
import { vetDashboard } from "@/mockData/vet/vet.mock";

const DynamicProfileContent = dynamic(
  () => import("@/pagesContent/Vet/ProfileContent"),
  {
    loading: Preloader,
  }
);

const DynamicVaxRequestQueueContent = dynamic(
  () => import("@/pagesContent/Vet/VaxRequestQueueContent"),
  {
    loading: Preloader,
  }
);

export const vetConfig: ConfigTypes = {
  layout: [
    {
      title: "Veterinarian Account",
      component: <DynamicProfileContent dashboard={vetDashboard} />,
      href: "/vet/profile",
      hrefTitle: "Profile overview",
    },
    {
      title: "Vax Request Queue",
      component: <DynamicVaxRequestQueueContent />,
      href: "/vet/vax-request-queue",
      hrefTitle: "Vax Request Queue",
    },
  ],
  dropDown: [
    {
      title: "Profile Overview",
      href: "/vet/profile",
    },
    {
      title: "Vax Request Queue",
      href: "/vet/vax-request-queue",
    },
  ],
};
