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
            urlGraph={lang[activeLang].url1}
          />
          <InteractivePowerBIContent
            invert
            title={lang[activeLang].title2}
            body={lang[activeLang].body2}
            urlGraph={lang[activeLang].url2}
          />
          <InteractivePowerBIContent
            title={lang[activeLang].title3}
            body={lang[activeLang].body3}
            urlGraph={lang[activeLang].url3}
          />
          <InteractivePowerBIContent title="SICR" urlGraph={lang[activeLang].url4} />
        </Grid>
      </Container>
    </MKBox>
  );
};
