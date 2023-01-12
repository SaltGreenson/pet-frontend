import React from "react";
import dynamic from "next/dynamic";

import { Preloader } from "@/components/common";

import { kennelDashboard } from "@/mockData/kennel/kennel.mock";
import { ConfigTypes } from "@/types/common.types";

const DynamicProfileContent = dynamic(
  () => import("@/pagesContent/Kennel/ProfileContent"),
  {
    loading: Preloader,
  }
);

const DynamicBookingQueueContent = dynamic(
  () => import("@/pagesContent/Kennel/BookingQueueContent"),
  {
    loading: Preloader,
  }
);

const DynamicBehavioralReportingContent = dynamic(
  () => import("@/pagesContent/Kennel/BehavioralReportingContent"),
  {
    loading: Preloader,
  }
);

export const kennelConfig: ConfigTypes = {
  layout: [
    {
      title: "Kennel Account",
      component: <DynamicProfileContent dashboard={kennelDashboard} />,
      href: "/kennel/profile",
      hrefTitle: "Profile overview",
    },
    {
      title: "Booking Center",
      component: <DynamicBookingQueueContent />,
      href: "/kennel/booking-queue-and-schedule",
      hrefTitle: "Booking Queue & Schedule",
    },
    {
      title: "Behavioral Reporting Center",
      component: <DynamicBehavioralReportingContent />,
      href: "/kennel/behavioral-reporting-center",
      hrefTitle: "Behavioral Reporting Center",
    },
  ],
  dropDown: [
    {
      title: "Profile Overview",
      href: "/kennel/profile",
    },
    {
      title: "Booking Queue & Schedule",
      href: "/kennel/booking-queue-and-schedule",
    },
    {
      title: "Behavioral Reporting Center",
      href: "/kennel/behavioral-reporting-center",
    },
  ],
};
