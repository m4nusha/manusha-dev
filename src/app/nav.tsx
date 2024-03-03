import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="container float-right mb-auto gap-y-4 items-start flex flex-row justify-centre relative h-32 w-32 text-blue-gray-900 pr-20 bg-blue-900">
      <ul className="text-centre">
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800 text-xl" href="/">
            Home
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800 text-xl" href="/about">
            About
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800 text-xl" href="/experience">
            Experience
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800 text-xl" href="/projects">
            Projects
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800 text-xl" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
