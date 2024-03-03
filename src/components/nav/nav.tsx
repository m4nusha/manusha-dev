import React from "react";
import { NavItem } from "./navItem";

export default function Nav() {
  return (
    <div>
      <ul className="text-centre flex flex-row gap-4">
        <NavItem name={"Home"} href={"/"} />
        <NavItem name={"About"} href={"/about"} />
        <NavItem name={"Projects"} href={"/projects"} />
        <NavItem name={"Contact"} href={"/contact"} />
      </ul>
    </div>
  );
}
