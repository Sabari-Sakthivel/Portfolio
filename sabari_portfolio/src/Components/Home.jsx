import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
    <section id="/" className="min-h-screen bg-zinc-900 ml-72 text-white flex flex-col justify-center items-center p-4">
      <div className="text-center">
        <h3 className="text-white font-medium text-2xl mb-10">Welcome</h3>
        <div className="text-white font-serif text-2xl mt-6">
          <TypeAnimation
            sequence={sequence}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-300 text-2xl font-light mt-7">From Chennai, India</p>
        <button className="inline-block text-white hover:bg-green-500 border border-green-700 px-6 py-1 mt-8 rounded-full">
          Hire Me
        </button>
      </div>
    </section>
    <section id="aboutme">
    <div className="bg-dark-1 min-h-screen end-3/4">
      <p className="text-white font-poppins   font-semibold text-4xl mb-4 ">
        Know <span className="underline  customUnderline">Me</span> More
      </p>
      <h1 className="text-Gray-1 opacity-5 text-9xl ml-72 pt-10 font-poppins font-semibold flex items-center justify-center">
        ABOUT ME
      </h1>
    </div>
  </section>
  </>
  );
};

export default Home;
