import React from "react";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface InteractivePowerBIContentProps {
  title?: string;
  body?: string;
  urlGraph?: string;
  invert?: boolean;
}

export const InteractivePowerBIContent: React.FC<InteractivePowerBIContentProps> = ({
  title = "",
  body = "",
  urlGraph = "",
  invert = false,
}) => {
  return (
    <View>
      <MKBox component="section" py={{ xs: 3, md: 2 }}>
        <Container>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              gap: { xs: 3, lg: 1 },
              flexDirection: { xs: "row", md: invert ? "row-reverse" : "row" },
            }}
          >
            <Grid item xs={12} lg={5}>
              <MKTypography variant="h3" my={1}>
                {title}
              </MKTypography>
              {body ? (
                <>
                  <MKTypography
                    color="text"
                    mb={2}
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    {body}
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
                </>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              lg={body ? 6 : 12}
              sx={{
                paddingBottom: { xs: "63%", lg: body ? "40%" : "63%" },
                position: "relative",
              }}
            >
              <iframe
                title="SICR_Historico"
                src={urlGraph}
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
    </View>
  );
};
