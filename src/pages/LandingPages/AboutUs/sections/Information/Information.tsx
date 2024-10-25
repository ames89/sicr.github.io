import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { useLanguage } from "hooks/useLanguage";
import { lang } from "./lang";

export const Information = () => {
  const { language: activeLang } = useLanguage();
  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="groups"
                    title={lang[activeLang].title1}
                    description={lang[activeLang].desc1}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="grade"
                    title={lang[activeLang].title2}
                    description={lang[activeLang].desc2}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="handshakeOutlined"
                    title={lang[activeLang].title3}
                    description={lang[activeLang].desc3}
                  />
                </MKBox>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="visibility"
                  title={lang[activeLang].title4}
                  description={lang[activeLang].desc4}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12}>
              <MKBox>
                <DefaultInfoCard
                  icon="rocketLaunch"
                  title={lang[activeLang].title5}
                  description={lang[activeLang].desc5}
                />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};
