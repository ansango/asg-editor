import type { ReactNode } from "react";
import { BreadcrumbMobile } from "../breadcrumb";
import { Header } from "../header";
import { SideBar } from "../sidebar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <BreadcrumbMobile />
      <SideBar />
      {children}
    </>
  );
};
