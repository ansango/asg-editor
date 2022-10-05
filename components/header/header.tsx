import { Brand } from "../common";
import { Searcher } from "./searcher";
import { ThemeSwitcher } from "./theme-switcher";
import { User } from "./user";

export const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 lg:mr-0 lg:hidden">
          <Brand />
        </div>

        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <Searcher />

          <div className="flex flex-row items-center justify-end gap-2">
            <ThemeSwitcher />
            <User />
          </div>
        </div>
      </nav>
    </header>
  );
};
