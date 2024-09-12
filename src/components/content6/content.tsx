import { joinClasses } from "../../utils/utils";
import { MailtoContent } from "../utils/data";
import css from "./content.module.scss";

export const Content6 = () => {
  return (
    <div>
      <div className={css.cubes} />
      <div className={css.container1_1}>
        <div className={css.container2}>
          <h2 className={css.header1}>
            Mas valiosa que el dinero, es la información
          </h2>
          <p className={css.p}>
            ¡Únete a nuestro proyecto y contribuye al futuro sostenible de Costa
            Rica! Necesitamos tus datos sobre la generación de residuos para
            optimizar su gestión mediante inteligencia artificial. Con tu ayuda,
            podemos reducir desechos, promover la economía circular y crear un
            impacto positivo en nuestra comunidad y el medio ambiente.
            ¡Participa!
          </p>
          <h2 className={css.header2}>Para más información</h2>
          <a
            href={MailtoContent}
            target="_blank"
            className={joinClasses("button", css.button)}
          >
            Solicitar información
          </a>
        </div>
      </div>
      <div className={css.footer}>
        <span>©2024</span>
        <div className={css.rightFooter}>
          <a className={css.link} href="#top">
            Principal
          </a>
          <a className={css.link} href="#acerca">
            Acerca
          </a>
          <a target="_blank" className={css.link} href={MailtoContent}>
            Contacto
          </a>
          <a
            target="_blank"
            className={css.link}
            href="https://www.instagram.com/sicr.ai"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
