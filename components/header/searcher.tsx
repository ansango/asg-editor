import { Icon } from "../common";

export const Searcher = () => {
  return (
    <div className="hidden sm:block">
      <label htmlFor="icon" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
          <Icon name="FiSearch" className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          id="icon"
          name="icon"
          className="py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
