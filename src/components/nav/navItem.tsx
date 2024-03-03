import Link from "next/link";
import React from "react";

export function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <li className="text-centre">
      <Link className="text-slate-100 hover:text-emerald-300 text-xl" href={href}>
        {name}
      </Link>
    </li>
  );
}
