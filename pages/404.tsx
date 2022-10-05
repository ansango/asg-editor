import { NextPage } from "next";
import Link from "next/link";
import { ContainerCentered, Icon } from "../components";

const FourOhFour: NextPage = () => {
  return (
    <ContainerCentered>
      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            404
          </h1>
          <h1 className="block text-2xl font-bold text-white"></h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn&apos;t find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link href="/">
              <a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900">
                <Icon name="FiChevronLeft" className="flex-none" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </ContainerCentered>
  );
};

export default FourOhFour;
