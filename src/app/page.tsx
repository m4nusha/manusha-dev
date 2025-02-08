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
          <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
            
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
      </div>
    </main>
  );
}