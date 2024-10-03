import { joinClasses } from "../../utils/utils";
import pencil from "./pencil.svg";
import css from "./content.module.scss";

export const Content1 = () => {
  return (
    <div className={joinClasses(css.row, css.container)}>
      <div className={joinClasses(css.container1, css.column)}>
        <h2 className={css.title}>Rápido, Acertado, Óptimo</h2>
        <p className={css.p}>
          Nos comprometemos a impulsar el progreso de Costa Rica utilizando
          datos e inteligencia artificial para fomentar una economía circular
          que potencie la evolución del país. A través de estas tecnologías,
          buscamos optimizar capacidades y procesos, creando un impacto positivo
          y sostenible en su desarrollo.
        </p>
        <div className={css.texts}>
          <div className={joinClasses(css.title, css.it1)}>
            <img alt="pencil" src={pencil} className={css.icon} />
            <h3>En la unión está la fuerza</h3>
          </div>
          <div className={joinClasses(css.title, css.it3)}>
            <img alt="pencil" src={pencil} className={css.icon} />
            <h3>Todos tenemos algo valioso que aportar</h3>
          </div>
          <p className={joinClasses(css.it2, css.p)}>
            Que la información sea siempre accesible para todos, facilitando la
            colaboración y el apoyo de quienes deseen contribuir al progreso
            común.
          </p>
          <p className={joinClasses(css.it4, css.p)}>
            La inteligencia artificial se nutre del conocimiento, y compartir
            ese conocimiento es nuestra mayor fortaleza. Aprovechemos esta
            oportunidad para construir un futuro mejor juntos.
          </p>
        </div>
      </div>
      <div className={joinClasses(css.column, css.img, css.Desktop)}></div>
    </div>
  );
};
