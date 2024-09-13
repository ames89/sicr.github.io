import Css from "./power-bi-widget.module.scss";

export const PowerBIWidget: React.FC = (): JSX.Element => {
  return (
    <div className={Css.container}>
      <iframe
        id="SICR_Datos"
        className={Css.frame}
        title="SICR_Datos"
        src="https://app.powerbi.com/view?r=eyJrIjoiODcwYTJiMjEtZDFhMy00YTMwLWIzMDItZTE5NTBjMWU0NGEzIiwidCI6IjY0M2MzNTRjLThlMzMtNDNiMS05YTZiLTM2M2M1Mjk1OWI0YiIsImMiOjR9&pageName=c833276eb095ee00c6bd"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
};
