import React from "react";
import Icon from "@mui/material/Icon";
import AboutUs from "./layouts/pages/landing-pages/about-us";
import ContactUs from "./layouts/pages/landing-pages/contact-us";
import Presentation from "./layouts/pages/presentation";

export interface IRoute {
  id: string;
  name: string;
  route: string;
  component: React.JSX.Element;
  icon: React.JSX.Element;
  columns?: number;
  rowsPerColumn?: number;
  href?: string;
  description?: string;
  dropdown?: boolean;
  collapse?: IRoute[];
}

export const routes: IRoute[] = [
  {
    id: "main",
    name: "Principal",
    route: "/",
    component: <Presentation />,
    icon: <Icon>domain</Icon>,
    columns: 0,
    rowsPerColumn: 1,
  },
  {
    id: "aboutUs",
    name: "Acerca de Nosotros",
    route: "/about-us",
    component: <AboutUs />,
    icon: <Icon>people</Icon>,
  },
  {
    id: "contactUs",
    name: "Contáctanos",
    route: "/contact-us",
    component: <ContactUs />,
    icon: <Icon>mailOutline</Icon>,
    columns: 0,
    rowsPerColumn: 1,
  },
];
