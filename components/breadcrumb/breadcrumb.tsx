import { Icon } from "../common";

export const BreadcrumbMobile = () => {
  return (
    <div className="sticky top-[59px] inset-x-0 z-20 bg-white border-y px-4 sm:px-6 sm:top-[71px] md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center py-4">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#hs-overlay-basic"
          aria-controls="hs-overlay-basic"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <Icon name="FiMenu" className="h-5 w-5" />
        </button>

        <ol
          className="ml-3 flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Application Layout
            <Icon
              name="FiChevronRight"
              className="flex-shrink-0 mx-3 overflow-visible h-4 w-4 text-gray-400 dark:text-gray-600"
            />
          </li>
          <li
            className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
            aria-current="page"
          >
            Dashboard
          </li>
        </ol>
      </div>
    </div>
  );
};
