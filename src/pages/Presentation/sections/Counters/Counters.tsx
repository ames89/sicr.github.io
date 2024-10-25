import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useLanguage } from "hooks/useLanguage";
import { lang } from "./lang";

export const Counters = () => {
  const { language: activeLang } = useLanguage();

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3.4}
              decimals={1}
              suffix="M T"
              title={lang[activeLang].title1}
              description={lang[activeLang].desc1}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={1.4}
              decimals={1}
              suffix="M T"
              title={lang[activeLang].title2}
              description={lang[activeLang].desc2}
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={30}
              suffix="%"
              title={lang[activeLang].title3}
              description={lang[activeLang].desc3}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};
