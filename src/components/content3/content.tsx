import { joinClasses } from "../../utils/utils";
import css from "./content.module.scss";

export const Content3 = () => {
  return (
    <div className={css.container}>
      <div className={joinClasses(css.content, css.image, css.Desktop)} />
      <div className={joinClasses(css.content, css.textContent)}>
        <h2 className={css.title}>Podemos lograr Grandes Cosas</h2>
        <p className={css.p}>
          La economía circular promueve la reutilización y reciclaje de
          recursos, lo que no solo reduce desechos y contaminación, sino que
          también optimiza el uso de los recursos naturales. Este enfoque
          fomenta un ambiente más limpio, crea empleos verdes y mejora la
          calidad de vida, asegurando un futuro sostenible. Un componente clave
          de esta transformación es el uso de tecnologías avanzadas como el
          machine learning y la inteligencia artificial (IA), que permiten
          predecir y gestionar los flujos de residuos de manera eficiente. A
          través de la recolección y análisis de grandes volúmenes de datos
          sobre patrones de consumo, tipos de residuos generados y
          comportamiento de reciclaje, los algoritmos de machine learning pueden
          predecir con precisión la cantidad y el tipo de residuos que serán
          generados en distintas regiones o sectores. Esto facilita la
          planificación proactiva y la optimización de los sistemas de reciclaje
          y reutilización.
        </p>
      </div>
    </div>
  );
};
