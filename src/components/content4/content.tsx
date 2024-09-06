import { joinClasses } from "../../utils/utils";
import css from "./content.module.scss";

export const Content4 = () => {
  return (
    <div className={css.container}>
      <div className={joinClasses(css.content, css.image, css.Desktop)} />
      <div className={joinClasses(css.content, css.textContent)}>
        <h2 className={css.title}>Únetenos</h2>
        <p className={css.p}>
          Te invitamos a unirte a nuestro innovador proyecto de optimización
          predictiva de residuos. Con tu participación, podemos avanzar hacia
          una Costa Rica más sostenible, aprovechar la inteligencia artificial
          para mejorar la gestión de residuos y fomentar la economía circular.
          Juntos, transformaremos desafíos ambientales en oportunidades, creando
          un impacto positivo en nuestra comunidad y el medio ambiente. Únete a
          nosotros y sé parte del cambio hacia un futuro más verde y próspero.
        </p>
        <button className={css.button}>UNIRSE</button>
      </div>
    </div>
  );
};
