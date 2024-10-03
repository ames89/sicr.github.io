import { joinClasses } from "../../utils/utils";
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
            Nuestra misión es desarrollar e implementar soluciones innovadoras
            basadas en inteligencia artificial para optimizar la gestión de
            residuos en Costa Rica. Mediante modelos predictivos avanzados, nos
            enfocamos en reducir la generación de desechos, fomentar la economía
            circular y contribuir de manera decisiva a la sostenibilidad
            ambiental y al bienestar de las comunidades, impulsando un futuro
            más limpio y eficiente.
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
            Nuestra visión es convertirnos en líderes globales en la aplicación
            de tecnologías avanzadas para la gestión sostenible de residuos.
            Aspiramos a desarrollar un modelo replicable que no solo transforme
            Costa Rica, sino que también sirva como referencia mundial,
            impulsando un cambio positivo y duradero hacia un planeta más limpio
            y habitable para las futuras generaciones.
          </p>
        </div>
      </div>
    </div>
  );
};
