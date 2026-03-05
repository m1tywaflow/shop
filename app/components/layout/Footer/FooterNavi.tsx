"use client";
import Link from "next/link";
import { type NavigationItem } from "@/app/types/Navigation";

const navItems: NavigationItem[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const FooterNavi = () => {
  return (
    <div className="flex flex-col text-lg font-bold text-black">
      {navItems.map(({ path, label }) => (
        <Link key={path} href={path} className="hover:opacity-60 transition">
          {label}
        </Link>
      ))}
    </div>
  );
};

export default FooterNavi;
