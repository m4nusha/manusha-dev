import Link from "next/link";
import React from "react";

export function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <li className="text-centre">
      <Link
        className="text-slate-100 museomoderno text-base hover:bg-pink-300 hover:text-slate-900 p-2 rounded-lg transition duration-300 ease-in-out"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}