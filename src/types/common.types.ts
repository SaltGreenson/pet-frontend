import { LayoutContentType } from "./vet.types";
import { ReactNode } from "react";

export type DropDownLinksType = {
  href: string;
  title: string;
};

export type ConfigTypes = {
  layout: Array<LayoutContentType>;
  dropDown: Array<DropDownLinksType>;
};

export type EditModalWindowConfigType = {
  form: ReactNode;
};

export type LinkType = {
  href: string;
  title: string;
};

export type TextBlockElementType = {
  id: string;
  description: string;
};
