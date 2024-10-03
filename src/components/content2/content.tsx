import { joinClasses } from "../../utils/utils";
import css from "./content.module.scss";

export const Content2 = () => {
  return (
    <div id="acerca" className={css.container}>
      <div className={joinClasses(css.content, css.image, css.Desktop)} />
      <div className={joinClasses(css.content, css.textContent)}>
        <h2 className={css.title}>¿Quiénes somos?</h2>
        <p className={css.p}>
          Nuestro equipo está compuesto por expertos en inteligencia artificial,
          informática y gestión ambiental, todos comprometidos con la
          transformación de la gestión de residuos en Costa Rica hacia un futuro
          más verde y eficiente. Utilizamos tecnologías avanzadas del machine
          learning para analizar grandes volúmenes de datos sobre patrones de
          generación de residuos, consumo de recursos y comportamiento de
          reciclaje. Estas herramientas nos permiten identificar tendencias,
          optimizar procesos y anticipar la cantidad y tipo de residuos que
          serán generados en diferentes regiones y sectores, ayudando a reducir
          el impacto ambiental de manera significativa. Además, utilizamos
          modelos predictivos que proporcionan información valiosa a gobiernos y
          empresas en tiempo real. Con estos modelos, no solo se puede prever la
          generación de residuos, sino también mejorar la eficiencia de los
          sistemas de recolección y reciclaje, facilitando una planificación más
          precisa y sostenible. Gracias a la IA, nuestro enfoque permite a Costa
          Rica avanzar hacia un sistema de gestión de residuos más inteligente,
          impulsando la reutilización de materiales y promoviendo un impacto
          ambiental positivo a largo plazo.
        </p>
      </div>
    </div>
  );
};
