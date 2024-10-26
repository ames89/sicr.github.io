// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThreadsIcon } from "assets/icons/threads";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "./assets/images/SICR_Logo_2_alpha-min.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon sx={{ width: "20px", height: "20px" }} />,
      link: "https://www.facebook.com/profile.php?id=61566447437342",
    },
    {
      icon: <i className="fab fa-instagram" style={{ width: "20px", height: "20px" }} />,
      link: "https://www.instagram.com/sicr.ai",
    },
    {
      icon: <ThreadsIcon sx={{ width: "20px", height: "20px" }} />,
      link: "https://www.threads.net/@sicr.ai",
    },
  ],
  menus: [
    {
      name: "Equipo",
      lang: { es: "Equipo", en: "Team" },
      items: [
        {
          name: "Acerca de Nosotros",
          lang: { es: "Acerca de Nosotros", en: "About Us" },
          href: "/about-us",
        },
      ],
    },
    {
      name: "Recursos",
      lang: { es: "Recursos", en: "Resources" },
      items: [
        {
          name: "Resumen Ejecutivo",
          lang: { es: "Resumen Ejecutivo", en: "Executive Summary" },
          href: "https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Resumen_Ejecutivo_compressed.pdf",
        },
        {
          name: "Análisis de Resultados",
          lang: { es: "Análisis de Resultados", en: "Results Analysis" },
          href: "https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Analisis_de_Resultados_SICR_compressed.pdf",
        },
      ],
    },
    {
      name: "Ayuda y Soporte",
      lang: { es: "Ayuda y Soporte", en: "Help and Support" },
      items: [
        {
          name: "Contáctanos",
          lang: { es: "Contáctanos", en: "Contact Us" },
          href: "/contact-us",
        },
      ],
    },
    {
      name: "Herramienta",
      lang: { es: "Herramienta", en: "Tool" },
      items: [
        {
          name: "SICR",
          lang: { es: "SICR", en: "SICR" },
          href: "https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd",
        },
      ],
    },
  ],
  copyrightLang: {
    es: <>Todos los derechos reservados. Copyright &copy; {date}.</>,
    en: <>All rights reserved. Copyright &copy; {date}.</>,
  },
  copyright: (content) => (
    <MKTypography variant="button" fontWeight="regular">
      {content}
    </MKTypography>
  ),
};
