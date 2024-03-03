import { Subtitle } from "@/components/shared/subtitle";
import { Title } from "@/components/shared/title";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title name={"Projects"} />
      <Subtitle name="These are my projects" />
    </main>
  );
}
