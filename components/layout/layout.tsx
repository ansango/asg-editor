import type { ReactNode } from "react";
import { BreadcrumbMobile } from "../breadcrumb";
import { Header } from "../header";
import { SideBar } from "../sidebar";
import { ThemeProvider } from "./theme";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <Header />
      <BreadcrumbMobile />
      <SideBar />
      {children}
    </ThemeProvider>
  );
};
