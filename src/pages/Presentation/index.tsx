import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Counters } from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import { Download } from "pages/Presentation/sections/Download";
import { routes } from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-presentation-v2_compressed.png";
import { lang } from "./lang";
import { useLanguage } from "hooks/useLanguage";

declare module "@mui/system" {
  interface Theme extends Record<string, any> {}
}

const Presentation = () => {
  const { language: activeLang } = useLanguage();

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={7}
            justifyContent="center"
            mx="auto"
            sx={{ backgroundColor: "#13716787", borderRadius: 3 }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: "75px" }}
            />
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              px={{ xs: 3, lg: 6 }}
              mt={3}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {lang[activeLang].header}{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              mb={3}
            >
              {lang[activeLang].text1}
            </MKTypography>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: "75px" }}
            />
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({
            palette: {
              common: { white },
            },
            functions: { rgba },
          }) => rgba(white, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Download />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Presentation;
