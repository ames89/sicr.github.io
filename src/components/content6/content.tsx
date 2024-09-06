import {joinClasses} from "../../utils/utils";
import css from "./content.module.scss";

export const Content6 = () => {
  return (
    <div>
      <div className={css.cubes} />
      <div className={css.container1_1}>
        <div className={css.container2}>
          <h2 className={css.header1}>Mas que dinero, información</h2>
          <p className={css.p}>
            ¡Únete a nuestro proyecto y contribuye al futuro sostenible de Costa
            Rica! Necesitamos tus datos sobre la generación de residuos para
            optimizar su gestión mediante inteligencia artificial. Con tu ayuda,
            podemos reducir desechos, promover la economía circular y crear un
            impacto positivo en nuestra comunidad y el medio ambiente.
            ¡Participa!
          </p>
          <h2 className={css.header2}>Pronto más información</h2>
          <button className={joinClasses("button", css.button)}>
            SUSCRIBIRSE
          </button>
        </div>
      </div>
      <div className={css.footer}>
        <div>
          <div className={css.column}>
            <div className={css.row}>
              <span>©2024</span>
              <span>Principal</span>
            </div>
            <div className={css.hSeparator}></div>
            <div className={css.row}>
              <div className={css.links}>
                <div>Principal</div>
                <div>Acerca</div>
                <div>Contacto</div>
              </div>
              <div className={css.icons}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
