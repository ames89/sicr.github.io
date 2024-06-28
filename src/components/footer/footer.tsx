import css from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={css.container1}>
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
        </div>
      </div>
    </div>
  );
};
