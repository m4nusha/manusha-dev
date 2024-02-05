import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="container mb-auto gap-y-4 items-end flex flex-row justify-centre relative h-32 w-32 text-blue-gray-900 pr-20 bg-blue-900">
      <ul className="text-centre">
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800" href="/">
            Home
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800" href="/about">
            About
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800" href="/experience">
            Experience
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800" href="/projects">
            Projects
          </Link>
        </li>
        <li className="text-centre">
          <Link className="text-white hover:text-blue-800" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
