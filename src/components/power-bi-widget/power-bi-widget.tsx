import Css from "./power-bi-widget.module.scss";

export const PowerBIWidget: React.FC = (): JSX.Element => {
  return (
    <div className={Css.container}>
      <iframe
        id="SICR_Datos"
        className={Css.frame}
        title="SICR_Datos"
        src="https://app.powerbi.com/reportEmbed?reportId=b5a6119f-c0f8-4028-a519-4d5eb81d33eb&autoAuth=true&embeddedDemo=true"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
};
