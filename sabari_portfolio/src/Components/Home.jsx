import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { FaFloppyDisk } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
  const [isVisible, setIsVisible] = useState(false);

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
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      <section
        id="home"
        className="min-h-screen flex-1 relative bg-dark-2 ml-64 text-white flex flex-col justify-center items-center p-4"
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
      <section id="about-me">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 mt-5 ml-64 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20 mt-8">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,
                a MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium "
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400 mb-10 h-9 relative inline-block font-serif">
              <ul>
                <li className="border-b-2 border-zinc-400 py-3 font-medium gap-1">
                  <span className="text-gray-100 font-sans ">Name : </span>
                  <span className="font-serif">Sabari Sakthivel</span>
                </li>
                <li className="border-b-2 border-zinc-400  py-3 gap-1 ">
                  <span className="text-gray-100 font-sans ">
                    Phone Number :
                  </span>
                  <span className="font-sans"> 6383284269</span>
                </li>
                <li className="border-b-2 border-zinc-400  py-3 gap-1">
                  <span className="text-gray-100 font-sans "> Email :</span>
                  <span className="font-sans text-emerald-500">
                    <Link to="mailto:sabari8536@gmail.com">
                      {" "}
                      sabari8536@gmail.com
                    </Link>
                  </span>
                </li>
                <li className="border-b-2 border-zinc-400  py-3 gap-1">
                  <span className="text-gray-100 font-sans ">Age :</span>
                  <span className="font-sans"> 23</span>
                </li>
                <li className="border-b-2 border-zinc-400  py-3 gap-1">
                  <span className="text-gray-100 font-sans ">From :</span>
                  <span className="font-serif"> Chennai, India</span>
                </li>
              </ul>

              <button className=" font-sans ml-24  text-white p-2 mt-8 rounded-full bg-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 trasition duration-300 ease-in-out ">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <button
          className={`fixed bottom-4 right-4 p-2 text-white hover:bg-emerald-500 rounded-full shadow-lg bg-slate-700 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={24} />
        </button>
      </section>
      <section id="what-i-do">
        <div className="bg-dark-2 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center ml-80 mt-5 absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              What I Do?
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              SERVICE
            </h1>
          </div>
          <div className="flex flex-wrap m-28">
            <div className=" flex gap-7 w-full md:w-1/2 p-4 ">
              <div>
                <FaDesktop
                  size={30}
                  className="text-emerald-500 border-2 p-6 rounded bg-black border-black "
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">Web Design</h3>
                <p className="text-gray-400 font-sans font-medium">
                  Lisque persius interesset his et, in quot <br /> quidam persequeris
                  vim, ad mea essent <br /> possim iriure.
                </p>
              </div>
            </div>
            <div className=" flex gap-7 w-full md:w-1/2 p-4">
              <div>
                <img
                  src="https://img.icons8.com/ios-fillehttps://www.shutterstock.com/image-vector/hummer-icon-conception-spanner-1019382055?irclickid=QhjXO3zaOxyKR-DV90RWoWSaUkC1pi0nEzLV1U0&irgwc=1&pl=2052558-560528&utm_campaign=Icons8&utm_content=560528&utm_medium=Affiliate&utm_source=2052558&utm_term=d/50/000000/hammer-and-wrench.png"
                  alt="Hammer and Wrench Icon"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">
                  Backend Development
                </h3>
                <p className="text-gray-400 font-sans font-medium">
                Lisque persius interesset his et, in quot <br /> quidam persequeris
                vim, ad mea essent <br /> possim iriure.
                </p>
              </div>
            </div>
            <div className=" flex gap-7 w-full mt-5 md:w-1/2 p-4">
              <div>
                <FaPaintbrush
                  size={30}
                  className="text-emerald-500 border-2 p-6 rounded bg-black border-black"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">
                  App Design & Develop
                </h3>
                <p className="text-gray-400 font-sans font-medium">
                Lisque persius interesset his et, in quot <br /> quidam persequeris
                vim, ad mea essent <br /> possim iriure.
                </p>
              </div>
            </div>
            <div className=" flex gap-7 mt-5 w-full md:w-1/2 p-4">
              <div>
                <FaFloppyDisk
                  size={30}
                  className="text-emerald-500 border-2 p-6 rounded bg-black border-black"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">
                  Database Management
                </h3>
                <p className="text-gray-400  font-sans font-medium">
                Lisque persius interesset his et, in quot <br /> quidam persequeris
                vim, ad mea essent <br /> possim iriure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center ml-96 mt-5 absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Resume
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              SUMMARY
            </h1>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="bg-dark-2 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins ml-96 mt-4 justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              My Work
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              PORTFOLIO
            </h1>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center ml-80 mt-4 absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Get in Touch
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              CONTACT
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
