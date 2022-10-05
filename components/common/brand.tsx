import Link from "next/link";

export const Brand = () => {
  return (
    <Link href="/">
      <a
        className="flex-none text-xl font-semibold dark:text-white"
        aria-label="Brand"
      >
        Brand
      </a>
    </Link>
  );
};
