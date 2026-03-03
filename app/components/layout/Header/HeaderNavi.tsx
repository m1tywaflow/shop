"use client";

import Link from "next/link";
import { type NavigationItem } from "@/app/types/Navigation";
import { usePathname } from "next/navigation";
const navItems: NavigationItem[] = [
  { path: "/", label: "Home" },
  { path: "/collections", label: "Collections" },
  { path: "/new", label: "New" },
];

const HeaderNavigation = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-center gap-8">
        {navItems.map(({ path, label }) => {
          const isActive =
            path === "/" ? pathName === "/" : pathName.startsWith(path);

          return (
            <Link
              key={path}
              href={path}
              className={`text-base font-medium py-1 border-y border-transparent transition-colors ${
                isActive
                  ? "text-orange-500 border-orange-500"
                  : "text-black hover:text-orange-400 hover:border-orange-400"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderNavigation;
