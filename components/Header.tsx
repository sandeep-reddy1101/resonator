"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IoSearch, IoClose, IoMenu } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
  const pathName = usePathname();
  const [menu, setMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const routes = useMemo(
    () => [
      { name: "Home", href: "/", active: pathName === "/" ? true : false },
      {
        name: "Pages",
        href: "/pages",
        active: pathName === "/pages" ? true : false,
      },
      {
        name: "Podcast",
        href: "/podcast",
        active: pathName === "/podcast" ? true : false,
      },
      {
        name: "Blog",
        href: "/blog",
        active: pathName === "/blog" ? true : false,
      },
      {
        name: "Shop",
        href: "/shop",
        active: pathName === "/shop" ? true : false,
      },
    ],
    [pathName]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-screen ${
        isScrolled || !menu ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 w-full">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={100}
              height={48}
            />
          </Link>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center justify-center cursor-pointer p-1 hover:bg-slate-200 rounded-lg sm:hidden transition ease-in-out"
        >
          {menu ? <IoMenu size={24} /> : <IoClose size={24} />}
        </div>
        <div className="hidden sm:flex items-center justify-center gap-x-4">
          {routes.map((item) => {
            return (
              <Link
                key={item.name}
                className={`text-black capitalize text-sm lg:text-base hover:underline hover:underline-offset-4 ${
                  item.active && "underline underline-offset-4 text-cyan-600"
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden sm:flex items-center justify-center gap-x-4 text-black">
          <div className="flex items-center justify-center gap-x-1 cursor-pointer">
            <IoSearch size={20} />
            <p className="text-sm lg:text-base capitalize">Search</p>
          </div>
          <PiDotsNineBold size={24} className="cursor-pointer" />
        </div>
      </div>
      {!menu && (
        <div className="sm:hidden flex flex-col justify-center items-start bg-white px-4">
          {routes.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:bg-slate-200 w-full text-black capitalize text-sm px-4 py-2 rounded-md ${
                  item.active && "underline underline-offset-4 text-cyan-600"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;
