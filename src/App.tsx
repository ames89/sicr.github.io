import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import routes from "routes";
import { LanguageProvider } from "hooks/useLanguage";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document?.scrollingElement?.scrollTop) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <LanguageProvider defaultLanguage="es" persisted>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Presentation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}
