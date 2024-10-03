import { joinClasses } from "../../utils/utils";
import { MailtoContent, POWERBI_URL } from "../utils/data";
import css from "./content.module.scss";

export const Content6 = () => {
  return (
    <div>
      <div className={css.cubes} />
      <div className={css.container1_1}>
        <div className={css.container2}>
          <h2 className={css.header2}>Para más información</h2>
          <a
            href="/files/Resumen_Ejecutivo_compressed.pdf"
            target="_blank"
            className={joinClasses("button", css.button)}
          >
            Resumen Ejecutivo
          </a>
          <a
            href="/files/Analisis_de_Resultados_SICR_compressed.pdf"
            target="_blank"
            className={joinClasses("button", css.button)}
          >
            Análisis de los Resultados
          </a>
        </div>
      </div>
      <div className={css.footer}>
        <span>©{new Date().getFullYear()}</span>
        <div className={css.rightFooter}>
          <a className={css.link} href="#top">
            Principal
          </a>
          <a target="_blank" className={css.link} href={POWERBI_URL}>
            SICR
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
          <a
            target="_blank"
            className={css.link}
            href="https://www.threads.net/@sicr.ai"
          >
            Threads
          </a>
        </div>
      </div>
    </div>
  );
};
