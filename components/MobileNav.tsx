"use client";

import { links } from "@/contants";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass={`${!isMobile && "active"}`}
          key={index}
          className="cursor-pointer hover:text-accent"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default MobileNav;
