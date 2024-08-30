import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown } from "react-icons/io";
import AboutMe from "./AboutMe";
import Sidebar from "./sidebar";

const Home = () => {
  const [sequence, setSequence] = useState([
    "I'm Sabari Sakthivel",
    2000,
    "MERN Stack Developer",
    2000,
    "React.js Developer",
    2000,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prevSequence) => {
        return prevSequence[0] === "I'm Sabari Sakthivel"
          ? [
              "MERN Stack Developer",
              1000,
              "I'm Sabari Sakthivel",
              1000,
              "React.js Developer",
              1000,
            ]
          : [
              "I'm Sabari Sakthivel",
              1000,
              "MERN Stack Developer",
              1000,
              "React.js Developer",
              1000,
            ];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="flex">
      <Sidebar />
      </div>
      <section
        id="home"
        className="min-h-screen flex-1 relative bg-zinc-900 ml-64 text-white flex flex-col justify-center items-center p-4"
      >
        <div className="text-center">
          <h3 className="text-white font-medium text-2xl mb-10">Welcome</h3>
          <div className="text-white font-serif text-2xl mt-6">
            <TypeAnimation
              sequence={sequence}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-white text-2xl font-semibold mt-7">
            From Chennai, India
          </p>
          <button className="inline-block  font-poppins  text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500 px-10 py-4 mt-10 rounded-full transition-colors duration-300  smooth-scroll">
            Hire Me
          </button>
        </div>
        <div className="absolute bottom-12 w-full flex justify-center">
          <IoIosArrowDown className="fall-animation text-3xl text-white cursor-pointer" />
        </div>
      </section>

      <AboutMe />
    </>
  );
};

export default Home;
