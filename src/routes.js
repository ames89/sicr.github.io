import Icon from "@mui/material/Icon";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Presentation from "layouts/pages/presentation";

const routes = [
  {
    name: "Menú",
    icon: <Icon>dashboard</Icon>,
    columns: 0,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Página Principal",
        route: "/",
        component: <Presentation />,
      },
      {
        name: "Acerca de Nosotros",
        route: "/about-us",
        component: <AboutUs />,
      },
      {
        name: "Contáctanos",
        route: "/contact-us",
        component: <ContactUs />,
      },
    ],
  },
];

export default routes;
