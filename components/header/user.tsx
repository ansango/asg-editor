import Image from "next/image";
import { signOut } from "next-auth/react";
const Avatar = () => {
  return (
    <button
      id="hs-dropdown-with-header"
      type="button"
      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
    >
      <Image
        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
        src="https://unsplash.it/200/200"
        alt="Avatar"
        height={200}
        width={200}
      />
    </button>
  );
};

const userLinks = ["Sign out"];

const UserLink = ({ label }: { label: string }) => {
  return (
    <button
      className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      onClick={() => signOut()}
    >
      <svg
        className="flex-none"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
      </svg>
      {label}
    </button>
  );
};

export const User = () => {
  const user = "anibalsantosgo@gmail.com";
  return (
    <div
      className="hs-dropdown relative inline-flex"
      data-hs-dropdown-placement="bottom-right"
    >
      <Avatar />

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
        aria-labelledby="hs-dropdown-with-header"
      >
        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Signed in as
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
            {user}
          </p>
        </div>
        <div className="mt-2 py-2 first:pt-0 last:pb-0">
          {userLinks.map((label) => (
            <UserLink key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};
