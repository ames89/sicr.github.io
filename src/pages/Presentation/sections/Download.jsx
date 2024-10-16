import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" sx={{ pt: { xs: 0, sm: 2 } }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, pt: 12, pb: 4 }}>
          <Grid container item xs={12} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Recursos
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Descarga ahora el Resumen Ejecutivo o el Análisis de Resultados y obtén una visión
              clara de nuestras soluciones innovadoras en la gestión de residuos. Conoce los datos
              clave y las estrategias que impulsan un futuro más sostenible.
            </MKTypography>
            <MKBox
              textAlign="center"
              mb={2}
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                component="a"
                href="https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Resumen_Ejecutivo_compressed.pdf"
                sx={{ mr: { md: 2 }, marginBottom: { xs: 2, md: 0 } }}
              >
                Resumen Ejecutivo
              </MKButton>
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                component="a"
                href="https://raw.githubusercontent.com/ames89/sicr.github.io/refs/heads/main/public/files/Analisis_de_Resultados_SICR_compressed.pdf"
              >
                Análisis de Resultados
              </MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
