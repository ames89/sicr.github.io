import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Information } from "pages/LandingPages/AboutUs/sections/Information";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";
import { ThreadsIcon } from "assets/icons/threads";
import { useLanguage } from "hooks/useLanguage";
import { lang } from "./lang";

function AboutUs() {
  const { language: activeLang } = useLanguage();

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="880px"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
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
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {lang[activeLang].header}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {lang[activeLang].body1}
            </MKTypography>
            <MKButton
              component={MuiLink}
              target="_blank"
              rel="noreferrer"
              href="mailto:sicr@sicr-costarica.org?subject=Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20trabajo&body=Hola%2C%0D%0A%0D%0AMe%20gustar%C3%ADa%20conocer%20mas%20acerca%20del%20proyecto"
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              {lang[activeLang].contact}
            </MKButton>
            <MKTypography variant="h6" color="white" mt={6} mb={1}>
              {lang[activeLang].findUs}
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/profile.php?id=61566447437342"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.instagram.com/sicr.ai"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.threads.net/@sicr.ai"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ThreadsIcon />
              </MKTypography>
            </MKBox>
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
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
