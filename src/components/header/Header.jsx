"use client";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "/public/images/svg/main-logo.svg";
import SearchIcon from "/public/images/svg/search-icon.svg";
import ArrowDownIcon from "/public/images/svg/arrow-down.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full sticky-header fixed top-0 px-4 sm:px-6 md:px-8 lg:px-28 bg-white flex justify-between items-center gap-10 z-20 ${
        isSticky ? "py-5" : "py-9"
      }`}
    >
      <div>
        <Image src={MainLogo} alt="main-logo-pets_plus" className="main-logo" />
      </div>
      <nav className="flex items-center justify-between sm:gap-5 md:gap-8 lg:gap-10 text-lg font-semibold">
        <Link href="/pets" className="hover:text-gray-700 flex gap-1 items-center">
          PETS
          <Image src={ArrowDownIcon} alt="Arrow Down" className="mt-1" />
        </Link>
        <Link href="/farms" className="hover:text-gray-700 flex gap-1 items-center">
          FARMS
          <Image src={ArrowDownIcon} alt="Arrow Down" className="mt-1" />
        </Link>
        <Link href="/exotics" className="hover:text-gray-700 flex gap-1 items-center">
          EXOTICS
          <Image src={ArrowDownIcon} alt="Arrow Down" className="mt-1" />
        </Link>
        <Link href="/shop" className="hover:text-gray-700 flex gap-1 items-center">
          SHOP
          <Image src={ArrowDownIcon} alt="Arrow Down" className="mt-1" />
        </Link>
        <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-96">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none pr-12"
          />
          <Image
            src={SearchIcon}
            alt="Search"
            className="absolute right-4 top-3"
          />
        </div>
      </nav>
    </header>
  );
}
