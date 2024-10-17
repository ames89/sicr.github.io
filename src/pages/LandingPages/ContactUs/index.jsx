import Grid from "@mui/material/Grid";
import { useState } from "react";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  const [namePerson, setNamePerson] = useState("");
  const [emailPerson, setEmailPerson] = useState("");
  const [body, setBody] = useState("");

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
                Contáctanos
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Para obtener más información, envíenos un correo a{" "}
                <MKTypography
                  component="a"
                  href="mailto:sicr@sicr-costarica.org"
                  target="_blank"
                  rel="noreferrer"
                  color="dark"
                  variant="body2"
                >
                  sicr@sicr-costarica.org
                </MKTypography>{" "}
                o comuníquese a través de nuestro formulario de contacto.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Nombre Completo"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={namePerson}
                      onChange={(val) => setNamePerson(val.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Correo Electrónico"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={emailPerson}
                      onChange={(val) => setEmailPerson(val.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="¿Cómo podemos ayudarte?"
                      placeholder="Escribe tu consulta en este recuadro"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      value={body}
                      onChange={(val) => setBody(val.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton
                    component="a"
                    variant="gradient"
                    color="info"
                    href={`mailto:sicr@sicr-costarica.org?subject=${encodeURI(
                      `Hola, mi nombre es ${namePerson} y me gustaría conocer más sobre su trabajo`
                    )}&body=${encodeURI(body)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar
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
}

export default ContactUs;
