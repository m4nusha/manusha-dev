import React from "react";
import { NavItem } from "./navItem";

export default function Nav() {
  return (
    <ul className="fixed right-0 top-0 z-50 text-center flex flex-row justify-end items-center gap-4 p-4 scroll-smooth">
      <NavItem name="Home" href="/" />
      <NavItem name="About" href="#about" />
      <NavItem name="Experience" href="#experience" />
      <NavItem name="Projects" href="#projects" />
      <NavItem name="Contact" href="#contact" />
    </ul>
  );
}
