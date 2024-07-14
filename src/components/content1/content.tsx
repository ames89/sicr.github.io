import { joinClasses } from "../../utils/utils";
import pencil from "./pencil.svg";
import css from "./content.module.scss";

export const Content1 = () => {
  return (
    <div className={joinClasses(css.row, css.container)}>
      <div className={joinClasses(css.container1, css.column)}>
        <h2 className={css.title}>Rápido, Acertado, Óptimo</h2>
        <p className={css.p}>
          Queremos dar lo mejor para Costa Rica a traves de la data e
          inteligencia artificial para el progreso de un pais donde la economía
          circular influya en su evolución y optimización de sus capacidades y
          procesos
        </p>
        <div className={css.texts}>
          <div className={joinClasses(css.title, css.it1)}>
            <img alt="pencil" src={pencil} className={css.icon} />
            <h3>En la unión está la fuerza</h3>
          </div>
          <div className={joinClasses(css.title, css.it3)}>
            <img alt="pencil" src={pencil} className={css.icon} />
            <h3>Todos tenemos algo que aportar</h3>
          </div>
          <p className={joinClasses(css.it2, css.p)}>
            Que la información siempre sea accesible y para todos poder
            contribuir y apoyar
          </p>
          <p className={joinClasses(css.it4, css.p)}>
            La inteligencia artificial se alimenta del conocimiento, y el
            conocimiento es lo mejor que se nos da, aprovechemos esta
            oportunidad para obtener un mejor futuro
          </p>
        </div>
      </div>
      <div className={joinClasses(css.column, css.img, css.Desktop)}></div>
    </div>
  );
};
