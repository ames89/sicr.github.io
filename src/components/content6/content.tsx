import { joinClasses } from "../../utils/utils";
import { MailtoContent } from "../utils/data";
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
        <span>©2024</span>
        <div className={css.rightFooter}>
          <a className={css.link} href="#top">
            Principal
          </a>
          <a
            target="_blank"
            className={css.link}
            href="https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd"
          >
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
        </div>
      </div>
    </div>
  );
};
