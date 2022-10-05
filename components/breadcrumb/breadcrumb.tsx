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
          <svg
            className="w-5 h-5"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <ol
          className="ml-3 flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Application Layout
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
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
