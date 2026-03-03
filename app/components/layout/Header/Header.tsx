"use client";

import HeaderNavigation from "./HeaderNavi";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "@deemlol/next-icons";
import { User } from "@deemlol/next-icons";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between p-8 bg-white">
      <div className="flex items-center gap-8">
        <button className="text-3xl text-black">≡</button>
        <HeaderNavigation />
      </div>
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
      >
        <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/favourite"
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
        >
          <Heart size={24} color="#FFFFFF" />
        </Link>

        <Link href="/cart" className="px-4 py-2 rounded-full bg-black">
          Cart
        </Link>

        <Link
          href="/profile"
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
        >
          <User size={24} color="#FFFFFF" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
