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
          recursos, reduciendo desechos y contaminación. Esto fomenta un
          ambiente más limpio, crea empleos verdes y mejora la calidad de vida,
          asegurando un futuro sostenible.
        </p>
      </div>
    </div>
  );
};
