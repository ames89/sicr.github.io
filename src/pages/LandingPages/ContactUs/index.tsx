import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { routes } from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import typography from "assets/theme/base/typography";
import { useLanguage } from "hooks/useLanguage";
import { lang } from "./lang";

const { fontWeightBold } = typography;

const ContactUs = () => {
  const { language: activeLang } = useLanguage();

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container alignItems="center">
        <Grid item xs={2} lg={6} display={{ xs: "none", lg: "block" }}>
          <MKBox
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {lang[activeLang].title1}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body1" fontWeight={fontWeightBold} color="text" mb={3}>
                {lang[activeLang].title2}
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                {lang[activeLang].body}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton
                    component="a"
                    variant="gradient"
                    color="info"
                    href="mailto:sicr@sicr-costarica.org"
                  >
                    {lang[activeLang].button}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ContactUs;
