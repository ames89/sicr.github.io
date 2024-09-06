import {joinClasses} from "../../utils/utils";
import css from "./content.module.scss";

export const Content5 = () => {
  return (
    <div className={css.container}>
      <div className={css.container1}>
        <div className={joinClasses(css.content, css.textContent)}>
          <h2 className={css.title}>Misión</h2>
        </div>
        <div className={css.divider} />
        <div className={joinClasses(css.content, css.textContent)}>
          <p className={css.p}>
            Desarrollar e implementar soluciones innovadoras basadas en
            inteligencia artificial para optimizar la gestión de residuos en
            Costa Rica. A través de modelos predictivos avanzados, buscamos
            reducir la generación de desechos, promover la economía circular y
            contribuir significativamente a la sostenibilidad ambiental y al
            bienestar de las comunidades.
          </p>
        </div>
      </div>
      <div className={joinClasses(css.container1, css.inverse)}>
        <div className={joinClasses(css.content, css.textContent)}>
          <h2 className={css.title}>Visión</h2>
        </div>
        <div className={css.divider} />
        <div className={joinClasses(css.content, css.textContent)}>
          <p className={css.p}>
            Convertirnos en líderes en la aplicación de tecnologías avanzadas
            para la gestión sostenible de residuos. Aspiramos a crear un modelo
            replicable que no solo beneficie a Costa Rica, sino que también
            sirva de ejemplo a nivel mundial, impulsando un cambio positivo y
            duradero hacia un planeta más limpio y habitable.
          </p>
        </div>
      </div>
    </div>
  );
};
