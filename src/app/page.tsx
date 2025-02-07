import React from "react";
import { Title } from "@/components/shared/title";
import TypingText from "@/components/shared/typingText";
import BackgroundClouds from "@/components/shared/background";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between h-full scroll-smooth">
      <BackgroundClouds />

      <div className="relative z-10 h-[100vh] w-[100vw] flex flex-col justify-center items-center space-y-4" id="home">
        <Title name="Welcome, I'm Manusha!" />
        <div>
          <TypingText />
        </div>
      </div>

      <div className="relative z-10 h-[100vh] w-[100vw] flex flex-col justify-center items-center space-y-4" id="about">
        <Title name="About Me" />
      </div>

      <div className="relative z-10 h-[100vh] w-full flex flex-col justify-center items-center space-y-4" id="experience">
        <Title name="Behold! My great experience and wisdom..." />
      </div>

      <div className="relative z-10 h-[100vh] w-full flex flex-col justify-center items-center space-y-4" id="projects">
        <Title name="My Creations" />
      </div>

      <div className="relative z-10 h-[100vh] w-full flex flex-col justify-center items-center space-y-4" id="contact">
        <Title name="Contact Me!" />
      </div>
    </main>
  );
}