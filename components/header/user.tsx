import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "../common";
const Avatar = () => {
  const { data } = useSession();
  return (
    <button
      id="hs-dropdown-with-header"
      type="button"
      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
    >
      {data?.user?.image && (
        <Image
          className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src={data.user.image}
          alt="Avatar"
          height={200}
          width={200}
        />
      )}
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
      <Icon name="FiLogOut" className="flex-none" />

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
