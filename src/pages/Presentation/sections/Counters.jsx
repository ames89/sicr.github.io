import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3.4}
              decimals={1}
              suffix="M T"
              title="Desechos Sólidos"
              description="Para 2050, se estima que de generarán 3.4 millones de toneladas de residuos urbanos al año."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={1.4}
              decimals={1}
              suffix="M T"
              title="Desechos en Costa Rica"
              description="Costa Rica produce 1.4 millones de toneladas de residuos sólidos anuales."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={30}
              suffix="%"
              title="Reciclaje en Costa Rica"
              description="Solo el 30% de estos residuos sólidos se recicla."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
