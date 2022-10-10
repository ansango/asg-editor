import type { NextPage } from "next";
import { ContainerCentered, Icon } from "../components";
import { signIn } from "next-auth/react";
const SignIn: NextPage = () => {
  return (
    <ContainerCentered>
      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Welcome to asg-editor
              </h1>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                onClick={() => signIn("github", { callbackUrl: "/" })}
              >
                <Icon name="FiGithub" className="w-5 h-auto" />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </main>
    </ContainerCentered>
  );
};

export default SignIn;
