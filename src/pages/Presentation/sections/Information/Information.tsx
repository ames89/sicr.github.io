import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import { InteractivePowerBIContent } from "components/InteractivePowerBIContent";
import { useLanguage } from "hooks/useLanguage";
import { lang } from "./lang";

export const Information = () => {
  const { language: activeLang } = useLanguage();

  return (
    <MKBox component="section" my={3}>
      <Container>
        <Grid container xs={12} alignItems="center" sx={{ mx: "auto", gap: { xs: 2, md: 4 } }}>
          <InteractivePowerBIContent
            title={lang[activeLang].title1}
            body={lang[activeLang].body1}
            urlGraph="https://app.powerbi.com/view?r=eyJrIjoiMjVjZjYyNGUtNzU2Yy00MjJlLTk0MjctZWI3NmQzMWY4YWI2IiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=2aa358ee053d147332bb"
          />
          <InteractivePowerBIContent
            invert
            title={lang[activeLang].title2}
            body={lang[activeLang].body2}
            urlGraph="https://app.powerbi.com/view?r=eyJrIjoiOWRhNjRiMWItZjg2My00ODJhLWEzNjItOTg1NjVkM2Q0ZGM3IiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=a0beff55972bb1a7ab6d"
          />
          <InteractivePowerBIContent
            title="Gestores"
            body="A pesar de los esfuerzos del gobierno costarricense por fomentar el reciclaje a través de una red de gestores, un análisis de la distribución geográfica de estos servicios y su capacidad instalada (Rivas SICR, 2024) indica que existen zonas del país con una oferta insuficiente. Esto limita la capacidad de gestionar de manera eficiente los residuos generados y reduce las oportunidades de valorización. La expansión de la red de gestores hacia nuevas áreas geográficas, junto con la creación de alianzas estratégicas, permitiría aprovechar al máximo los residuos generados y promover la economía circular."
            urlGraph="https://app.powerbi.com/view?r=eyJrIjoiZWJmYzMyNTQtZmQ4Yy00NjVhLWE0ZWMtMGEzOTc3N2E2ZTg3IiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=9f3d77f41cd6ebbeebe4"
          />
          <InteractivePowerBIContent
            title="SICR"
            urlGraph="https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd"
          />
        </Grid>
      </Container>
    </MKBox>
  );
};
