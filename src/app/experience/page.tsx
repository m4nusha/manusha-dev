import { Subtitle } from "@/components/shared/subtitle";
import { Title } from "@/components/shared/title";
import React from "react";

export default function Experience() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title name={"Experience"} />
      <Subtitle name={"My great experience and wisdom"} />
    </main>
  );
}
