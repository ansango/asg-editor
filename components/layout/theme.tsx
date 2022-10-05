import {
  useEffect,
  createContext,
  useState,
  FC,
  ReactNode,
  useContext,
} from "react";
import { useMounted } from "../../lib/hooks";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: Theme) => {},
});
const useTheme = () => useContext(ThemeContext);

const getTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const theme: Theme | null = localStorage.getItem("theme") as Theme;
    if (!theme) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      return "light";
    } else {
      return theme;
    }
  }
  return "light";
};

const resetTheme = () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.remove("dark");
};

type Theme = "light" | "dark";
export const themes: Theme[] = ["light", "dark"];

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme);
  const isMounted = useMounted();

  useEffect(() => {
    if (theme) {
      resetTheme();
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  useEffect(() => {
    const refreshTheme = () => localStorage.setItem("theme", theme);
    refreshTheme();
  }, [theme]);
  if (!isMounted) return null;
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
