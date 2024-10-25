import React from "react";

export type tLanguage = "en" | "es";

export interface ILanguageOptions {
  persisted?: boolean;
  defaultLanguage?: tLanguage;
  children?: React.ReactNode;
}

export interface ILanguageContext {
  language: tLanguage;
  setLanguage: React.Dispatch<React.SetStateAction<tLanguage>>;
}

export const LanguageContext = React.createContext<ILanguageContext>({} as ILanguageContext);

export const LanguageProvider: React.FC<ILanguageOptions> = ({
  persisted,
  defaultLanguage,
  children,
}) => {
  const [language, setLanguage] = React.useState<tLanguage>(() => {
    if (persisted) {
      const storageValue = localStorage.getItem("application_language");

      if (storageValue) {
        return JSON.parse(storageValue);
      } else {
        return defaultLanguage;
      }
    }
    return defaultLanguage;
  });

  React.useEffect(() => {
    if (persisted) {
      localStorage.setItem("application_language", JSON.stringify(language));
    }
  }, [language, persisted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);

  return context;
};
