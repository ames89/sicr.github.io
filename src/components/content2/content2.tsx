import { joinClasses } from "../../utils/utils";
import css from "./content.module.scss";

export const Content2 = () => {
  return (
    <div className={css.container}>
      <div className={joinClasses(css.content, css.image, css.Desktop)} />
      <div className={joinClasses(css.content, css.textContent)}>
        <h2 className={css.title}>¿Quiénes somos?</h2>
        <p className={css.p}>
          Nuestro equipo está compuesto por expertos en inteligencia artificial,
          sostenibilidad y gestión ambiental, dedicados a transformar la gestión
          de residuos en Costa Rica hacia un futuro más verde y eficiente.
        </p>
      </div>
    </div>
  );
};
