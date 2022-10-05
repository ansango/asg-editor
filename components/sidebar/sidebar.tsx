import Link from "next/link";
import { useRouter } from "next/router";
import { Brand, Icon, IconProps } from "../common";

const links: {
  name: string;
  href: string;
  icon: IconProps["name"];
}[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: "FiHome",
  },
  {
    name: "Uploads",
    href: "/uploads",
    icon: "FiUpload",
  },
];

export const SimpleLink = () => {
  return (
    <li>
      <Link href="/upload">
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
          <Icon name="FiUpload" className="flex-none" />
          Upload
        </a>
      </Link>
    </li>
  );
};

export const SimpleLinkActive = () => {
  return (
    <li>
      <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Icon name="FiHome" className="flex-none" />
        Dashboard
      </a>
    </li>
  );
};

export const SideBar = () => {
  const router = useRouter();

  return (
    <div
      id="hs-overlay-basic"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between items-center px-6">
        <Brand />
      </div>

      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {links.map((link) => {
            const isActive =
              router.pathname === link.href
                ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300";
            return (
              <li key={link.name}>
                <Link href={link.href}>
                  <a className={isActive}>
                    <Icon name={link.icon} className="flex-none" />
                    {link.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
