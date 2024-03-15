"use client";

import { links } from "@/contants";
import { Link as ScrollLink } from "react-scroll";

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass="active"
          key={index}
          className="cursor-pointer hover:text-accent"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;
