import MKButton from "components/MKButton";
import { tLanguage, useLanguage } from "hooks/useLanguage";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (val: tLanguage) => {
    setLanguage(val);
  };

  return (
    <>
      {(["es", "en"] as tLanguage[]).map((lang) => (
        <MKButton
          key={lang}
          disabled={language === lang}
          onClick={() => handleLanguageChange(lang)}
          component="button"
          variant={language === lang ? "outlined" : "text"}
          color="info"
          size="small"
        >
          {lang}
        </MKButton>
      ))}
    </>
  );
};
