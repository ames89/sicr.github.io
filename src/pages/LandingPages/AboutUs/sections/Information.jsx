import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
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
                    title="¿Quiénes somos?"
                    description="Nuestro equipo está compuesto por expertos en inteligencia artificial, informática y gestión ambiental, todos comprometidos con la transformación de la gestión de residuos en Costa Rica hacia un futuro más verde y eficiente. Utilizamos tecnologías avanzadas del machine learning para analizar grandes volúmenes de datos sobre patrones de generación de residuos, consumo de recursos y comportamiento de reciclaje. Estas herramientas nos permiten identificar tendencias, optimizar procesos y anticipar la cantidad y tipo de residuos que serán generados en diferentes regiones y sectores, ayudando a reducir el impacto ambiental de manera significativa. Además, utilizamos modelos predictivos que proporcionan información valiosa a gobiernos y empresas en tiempo real. Con estos modelos, no solo se puede prever la generación de residuos, sino también mejorar la eficiencia de los sistemas de recolección y reciclaje, facilitando una planificación más precisa y sostenible. Gracias a la IA, nuestro enfoque permite a Costa Rica avanzar hacia un sistema de gestión de residuos más inteligente, impulsando la reutilización de materiales y promoviendo un impacto ambiental positivo a largo plazo."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="peopleOutline"
                    title="Podemos lograr Grandes Cosas"
                    description="La economía circular promueve la reutilización y reciclaje de recursos, lo que no solo reduce desechos y contaminación, sino que también optimiza el uso de los recursos naturales. Este enfoque fomenta un ambiente más limpio, crea empleos verdes y mejora la calidad de vida, asegurando un futuro sostenible. Un componente clave de esta transformación es el uso de tecnologías avanzadas como el machine learning y la inteligencia artificial (IA), que permiten predecir y gestionar los flujos de residuos de manera eficiente. A través de la recolección y análisis de grandes volúmenes de datos sobre patrones de consumo, tipos de residuos generados y comportamiento de reciclaje, los algoritmos de machine learning pueden predecir con precisión la cantidad y el tipo de residuos que serán generados en distintas regiones o sectores. Esto facilita la planificación proactiva y la optimización de los sistemas de reciclaje y reutilización"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox>
                  <DefaultInfoCard
                    icon="apps"
                    title="Forma Parte de Nuestro Proyecto"
                    description="Te invitamos a formar parte de nuestro innovador proyecto de optimización predictiva de residuos. Con tu participación, podemos avanzar hacia una Costa Rica más sostenible, aprovechar la inteligencia artificial para mejorar la gestión de residuos y fomentar la economía circular. Juntos, transformaremos desafíos ambientales en oportunidades, creando un impacto positivo en nuestra comunidad y el medio ambiente. Únete a nosotros y sé parte del cambio hacia un futuro más verde y próspero."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
