/** @format */
import React from "react";
import HTMLimg from "../assets/skilsImg/HTML5.png";
import CSSimg from "../assets/skilsImg/CSS3.png";
import JSimg from "../assets/skilsImg/JavaScript.png";
import Reactimg from "../assets/skilsImg/React.png";
import Bootstrapimg from "../assets/skilsImg/Bootstrap.png";
import Tailwindimg from "../assets/skilsImg/Tailwind.png";
import TypeScriptimg from "../assets/skilsImg/TypeScript.png";
import ReduxToolkitimg from "../assets/skilsImg/ReduxToolkit.png";
// import NextJSimg from "../assets/skilsImg/NextJS.png";
import GitHubimg from "../assets/skilsImg/GitHub.png";
import NodeJSimg from "../assets/skilsImg/NodeJS.jpg";
import ExpressJSimg from "../assets/skilsImg/Express Js.jpg";
import MongoDBimg from "../assets/skilsImg/Mongo.png";
import RestAPIimg from "../assets/skilsImg/Rest APi.png";

const Experinece = () => {
  const images = [
    {
      id: 1,
      src: HTMLimg,
      alt: "HTML photo",
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSSimg,
      alt: "Css photo",
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JSimg,
      alt: "JS photo",
      name: "Java Script",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Reactimg,
      alt: "JSphoto",
      name: "React",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: ReduxToolkitimg,
      alt: "ReduxToolkit photo",
      name: "Redux Toolkit",
      style: "shadow-white",
    },
    {
      id: 6,
      src: TypeScriptimg,
      alt: "TypeScript photo",
      name: "TypeScript",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: Bootstrapimg,
      alt: "Bootstrap photo",
      name: "Bootstrap",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: Tailwindimg,
      alt: "Tailwind photo",
      name: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: NodeJSimg,
      alt: "NodeJS photo",
      name: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: ExpressJSimg,
      alt: "ExpressJS photo",
      name: "ExpressJS",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: MongoDBimg,
      alt: "MongoDB photo",
      name: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: RestAPIimg,
      alt: "RestAPI photo",
      name: "RestAPI",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: GitHubimg,
      alt: "Github photo",
      name: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 via-black text-white pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="font-bold text-4xl border-b-4  border-gray-500 inline">
            Experinece
          </p>
          <p className="py-6">These are tecnologies I've worked with</p>
        </div>

        <div className="pb-16 w-full  h-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
          {images.map(({ src, name, alt, id, style }) => (
            <div
              key={id}
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={alt} className="w-20 mx-auto" />
              <p className=" mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experinece;
