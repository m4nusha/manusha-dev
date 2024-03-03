import { Subtitle } from "@/components/shared/subtitle";
import { Title } from "@/components/shared/title";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title name={"Contact"} />
      <Subtitle name={"Find me on stuff"} />
    </main>
  );
}
