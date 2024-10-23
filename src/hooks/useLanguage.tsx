import React from "react";

export interface ILanguageObject {
  title: string;
  description: string;
  value: string;
  words?: {
    pages?: any;
    components?: any;
  };
}

export interface ILanguageOptions {
  defaultValue: ILanguageObject;
  persisted?: boolean;
  languages?: ILanguageObject[];
  children?: React.ReactNode;
}

export interface ILanguageContext {
  language: ILanguageObject;
  setLanguage: React.Dispatch<React.SetStateAction<ILanguageObject>>;
}

export const LanguageContext = React.createContext<ILanguageContext>({} as ILanguageContext);

export const LanguageProvider: React.FC<ILanguageOptions> = ({
  defaultValue,
  persisted,
  languages,
  children,
}) => {
  const [language, setLanguage] = React.useState<ILanguageObject>(() => {
    if (persisted) {
      const storageValue = localStorage.getItem("application_language");

      if (storageValue) {
        return languages!.filter((lang) => lang.value === JSON.parse(storageValue))[0];
      } else {
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  React.useEffect(() => {
    if (persisted) {
      localStorage.setItem("application_language", JSON.stringify(language.value));
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
