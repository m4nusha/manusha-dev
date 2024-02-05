import Link from "next/link";
import { Container } from "postcss";
import React from "react";

export default function About() {
  return (
    <div>
      <Link
      href="/about"
        className="font-medium text-blue-600 dark:text-blue-500"
      >
        About
        <p className="flex bg-center flex-row relative">
          Hi, I'm a software developer based in London.
        </p>
      </Link>
    </div>
  );
}