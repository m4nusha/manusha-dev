import { Subtitle } from "@/components/shared/subtitle";
import { Title } from "@/components/shared/title";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title name={`About`} />
      <Subtitle name={`Hi, I'm a software developer based in London.`} />
    </main>
  );
}
