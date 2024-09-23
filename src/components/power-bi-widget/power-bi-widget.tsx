import { POWERBI_URL } from "../utils/data";
import Css from "./power-bi-widget.module.scss";

export const PowerBIWidget: React.FC = (): JSX.Element => {
  return (
    <div className={Css.container}>
      <iframe
        id="SICR_Datos"
        className={Css.frame}
        title="SICR_Datos"
        src={POWERBI_URL}
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
};
