// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThreadsIcon } from "assets/icons/threads";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "SICR",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=61566447437342",
    },
    {
      icon: <i className="fab fa-instagram" />,
      link: "https://www.instagram.com/sicr.ai",
    },
    {
      icon: <ThreadsIcon />,
      link: "https://www.threads.net/@sicr.ai",
    },
  ],
  menus: [
    {
      name: "Equipo",
      items: [{ name: "Acerca de nosotros", href: "/about-us" }],
    },
    {
      name: "Recursos",
      items: [
        {
          name: "Resumen Ejecutivo",
          href: "https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Resumen_Ejecutivo_compressed.pdf",
        },
        {
          name: "Análisis de Resultados",
          href: "https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Analisis_de_Resultados_SICR_compressed.pdf",
        },
      ],
    },
    {
      name: "Ayuda y Soporte",
      items: [{ name: "Contáctanos", href: "/contact-us" }],
    },
    {
      name: "Herramientas",
      items: [
        {
          name: "SICR",
          href: "https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date}.
    </MKTypography>
  ),
};
