/** @format */

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-20">
            I am a Full Stack Developer with a strong focus on Front-End development. I
            have been enhancing my skills using the latest Front-End tools for
            nearly 2 years. Additionally, I am learning Back-End development
            with Node.js through self-study. During this time, I have made
            significant progress and I am rapidly advancing due to my strong
            desire to learn. I am confident that I will become a Full-stack
            developer in the near future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
