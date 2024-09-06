import css from "./header.module.scss";

export const Header = () => {
  return (
    <div className={css.bgContainer}>
      <div className={css.container}>
        <header className={css.appHeader}>
          <div className={css.headerLeft}>
            <span>Inicio</span>
            <span>Acerca</span>
            <span>Contacto</span>
            <a
              href="#SICR_Datos"
              style={{
                color: "inherit",
              }}>
              SICR
            </a>
          </div>
          <button className={css.Desktop}>únetenos</button>
        </header>
        <h1 className={css.appTitle}>
          Sistema Inteligente de Clasificación de Residuos (SICR)
        </h1>
        <div className={css.heroContainer}>
          <div className={css.hero}>
            <h2 className={css.subtitle}>
              Optimización Predictiva de Residuos: Hacia una Costa Rica
              Sostenible
            </h2>
            <p className={css.heroP}>
              Nos centramos en implementar modelos predictivos de machine
              learning para optimizar la gestión de residuos en Costa Rica,
              abordando la creciente problemática de los desechos sólidos y
              promoviendo la economía circular para maximizar el reciclaje y
              reutilización de recursos, en alineación con los Objetivos de
              Desarrollo Sostenible
            </p>
            <div className={css.buttonHolder}>
              <button>suscríbete</button>
              <button className={css.conoceMas}>Conoce más</button>
            </div>
          </div>
          <div className={css.heroImage}></div>
        </div>
      </div>
    </div>
  );
};
