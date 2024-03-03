import React from "react";
import { NavItem } from "./navItem";

export default function Nav() {
  return (
    <div className="">
      <ul className="text-centre flex flex-row justify-end align-middle gap-4 p-4 delay-150">
        <NavItem name={"Home"} href={"/"} />
        <NavItem name={"About"} href={"/about"} />
        <NavItem name={"Experience"} href={"/experience"} />
        <NavItem name={"Projects"} href={"/projects"} />
        <NavItem name={"Contact"} href={"/contact"} />
      </ul>
    </div>
  );
}
