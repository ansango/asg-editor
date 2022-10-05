import type { FC, ReactNode } from "react";

export const ContainerCentered: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      {children}
    </div>
  );
};
