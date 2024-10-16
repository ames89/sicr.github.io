import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 2 }}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: { xs: 3, lg: 1 } }}
        >
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Datos históricos
            </MKTypography>
            <MKTypography color="text" mb={2}>
              La creciente producción de residuos sólidos en Costa Rica, evidenciada por los datos
              históricos de 2011 a 2023, exige la implementación de políticas públicas más
              efectivas. Este problema, estrechamente ligado al crecimiento poblacional y al modelo
              de consumo actual, ha superado la capacidad de gestión de los residuos en el país. Un
              estudio del Ministerio de Salud de Costa Rica indica que el aumento en la generación
              de residuos ha sido del 11% anual, lo que subraya la necesidad de promover la economía
              circular y la reducción en la fuente (Portal MS, 2022).
            </MKTypography>
            <MKTypography
              component="a"
              href="https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              Leer más
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              paddingBottom: { xs: "63%", lg: "40%" },
              position: "relative",
            }}
          >
            <iframe
              title="SICR_Historico"
              src="https://app.powerbi.com/view?r=eyJrIjoiMjVjZjYyNGUtNzU2Yy00MjJlLTk0MjctZWI3NmQzMWY4YWI2IiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=2aa358ee053d147332bb"
              alt="SICR_Historico"
              style={{
                height: "100%",
                left: "0",
                position: "absolute",
                top: "0",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
