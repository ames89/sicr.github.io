import React from "react";
import Icon from "@mui/material/Icon";
import AboutUs from "./layouts/pages/landing-pages/about-us";
import ContactUs from "./layouts/pages/landing-pages/contact-us";
import Presentation from "./layouts/pages/presentation";

const routes = [
  {
    name: "Principal",
    route: "/",
    component: <Presentation />,
    icon: <Icon>domain</Icon>,
    columns: 0,
    rowsPerColumn: 1,
  },
  {
    name: "Acerca de Nosotros",
    route: "/about-us",
    component: <AboutUs />,
    icon: <Icon>people</Icon>,
  },
  {
    name: "Contáctanos",
    route: "/contact-us",
    component: <ContactUs />,
    icon: <Icon>mailOutline</Icon>,
    columns: 0,
    rowsPerColumn: 1,
  },
];

export default routes;
