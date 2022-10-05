import type { FC, ReactNode } from "react";

export const ContainerBase: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">{children}</div>
  );
};
