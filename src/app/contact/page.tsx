import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Link
      href="/contact"
        className="font-medium text-blue-600 dark:text-blue-500"
      >
        Contact

      </Link>
    </div>
  );
}