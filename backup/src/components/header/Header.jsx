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
      className={`w-full sticky-header fixed top-0 px-4 sm:px-6 md:px-8 lg:px-28 bg-white flex justify-between items-center z-20 ${
        isSticky ? "py-5" : "py-9"
      }`}
    >
      <div>
        <Image src={MainLogo} alt="main-logo-pets_plus" className="main-logo" />
      </div>
      <nav className="flex items-center justify-between sm:gap-5 md:gap-8 lg:gap-9 text-lg font-semibold">
        <Link href="/pets" className="hover:text-gray-700 flex items-center">
          PETS
          <div className="ml-1">
            <Image src={ArrowDownIcon} alt="Arrow Down" width={16} height={16} />
          </div>
        </Link>
        <Link href="/farms" className="hover:text-gray-700 flex items-center">
          FARMS
          <div className="ml-1">
            <Image src={ArrowDownIcon} alt="Arrow Down" width={16} height={16} />
          </div>
        </Link>
        <Link href="/exotics" className="hover:text-gray-700 flex items-center">
          EXOTICS
          <div className="ml-1">
            <Image src={ArrowDownIcon} alt="Arrow Down" width={16} height={16} />
          </div>
        </Link>
        <Link href="/shop" className="hover:text-gray-700 flex items-center">
          SHOP
          <div className="ml-1">
            <Image src={ArrowDownIcon} alt="Arrow Down" width={16} height={16} />
          </div>
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="min-w-72 w-96 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
          />
          <Image
            src={SearchIcon}
            alt="Search"
            className="absolute right-4 top-2.5"
          />
        </div>
      </nav>
    </header>
  );
}
