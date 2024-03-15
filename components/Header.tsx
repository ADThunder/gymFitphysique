"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderAcitve] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scoll
      setHeaderAcitve(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full h-[100px] bg-primary-200 transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href={""}>
          <Image
            priority
            src={"/assets/img/logo.png"}
            alt="logo"
            width={117}
            height={55}
          />
        </Link>
        {/* mobile nav -hidden on large device */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center gap-8 bg-primary-200 fixed w-full left-0 xl:hidden text-white text-base uppercase font-medium transition-all`}
        />
        {/* destop nav - hidden on small device */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex uppercase font-medium transition-all" />
        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* login and register button */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all uppercase text-base font-medium">
              login
            </button>
            <button className="hover:text-accent transition-all uppercase text-base font-medium">
              register
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
