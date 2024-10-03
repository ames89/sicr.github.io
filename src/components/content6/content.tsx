import { MailtoContent, POWERBI_URL } from "../utils/data";
import css from "./content.module.scss";
import resumen from "./resumen-ejecutivo.png";
import analisis from "./analysis-resultados.png";

export const Content6 = () => {
  return (
    <div>
      <div className={css.cubes} />
      <div className={css.container1_1}>
        <div className={css.container2}>
          <h2 className={css.header2}>Recursos</h2>
          <p>
            Descarga ahora el Resumen Ejecutivo o el Análisis de Resultados y
            obtén una visión clara de nuestras soluciones innovadoras en la
            gestión de residuos. Conoce los datos clave y las estrategias que
            impulsan un futuro más sostenible.
          </p>
          <div className={css.botones}>
            <a
              href="/files/Resumen_Ejecutivo_compressed.pdf"
              target="_blank"
              rel="noreferrer"
              className={css.imgLink}
            >
              <img
                alt="Resumen Ejecutivo"
                src={resumen}
                className={css.image}
              />
              <span>Resumen Ejecutivo</span>
            </a>
            <a
              href="/files/Analisis_de_Resultados_SICR_compressed.pdf"
              target="_blank"
              rel="noreferrer"
              className={css.imgLink}
            >
              <img
                alt="Análisis de Resultados"
                src={analisis}
                className={css.image}
              />
              <span>Análisis de Resultados</span>
            </a>
          </div>
        </div>
      </div>
      <div className={css.footer}>
        <span>©{new Date().getFullYear()}</span>
        <div className={css.rightFooter}>
          <a className={css.link} href="#top">
            Principal
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={css.link}
            href={POWERBI_URL}
          >
            SICR
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={css.link}
            href={MailtoContent}
          >
            Contacto
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={css.link}
            href="https://www.instagram.com/sicr.ai"
          >
            Instagram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
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
