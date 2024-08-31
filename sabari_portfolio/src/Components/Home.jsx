import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaDesktop, FaPaintbrush, FaFloppyDisk, FaLink } from "react-icons/fa6";
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
          <div className="relative w-full text-center">
            <p className="text-white font-poppins mt-5 absolute inset-x-0 lg:top-3  right-0 mx-auto sm:bottom-3 pt-14 font-semibold text-3xl md:text-4xl">
              What I Do?
            </p>
            <h1 className="text-Gray-1 opacity-5 text-6xl md:text-9xl pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              SERVICE
            </h1>
          </div>
          <div className="flex flex-wrap mx-6 md:mx- mb-10">
            <div className="flex gap-5 md:gap-7 mt-7 w-full md:w-1/2 p-4">
              <div className="relative bg-black h-fit rounded p-4">
                <FaDesktop size={30} className="text-emerald-500" />
              </div>
              <div className="max-w-sm">
                <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                  Web Design
                </h3>
                <p className="text-Gray-1 mt-1 font-sans font-medium leading-relaxed">
                  Crafting visually engaging websites that are user-friendly and
                  optimized for all devices. I focus on creating layouts that
                  capture your brand’s essence while ensuring usability and
                  performance.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:gap-7 mt-7  w-full md:w-1/2 p-4">
              <div className="relative bg-black h-fit rounded p-4">
                <FaLink size={30} className="text-emerald-500" />
              </div>
              <div className="max-w-sm">
                <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                  Backend Development
                </h3>
                <p className="text-Gray-1 mt-1 font-sans font-medium leading-relaxed">
                  Building secure and scalable server-side solutions to power
                  your applications. I develop robust APIs and handle data
                  processing to ensure your app runs smoothly and efficiently.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:gap-7 mt-7 w-full md:w-1/2 p-4">
              <div className="relative bg-black h-fit rounded p-4">
                <FaPaintbrush size={30} className="text-emerald-500" />
              </div>
              <div className="max-w-sm">
                <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                  App Design & Development
                </h3>
                <p className="text-Gray-1 mt-1 font-sans font-medium leading-relaxed">
                  Creating intuitive and responsive Web apps for a seamless user
                  experience on any platform. My approach combines creative
                  design with technical expertise to build Web apps that are
                  both functional and visually appealing.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:gap-7 mt-7 w-full md:w-1/2 p-4">
              <div className="relative bg-black h-fit rounded p-4">
                <FaFloppyDisk size={30} className="text-emerald-500" />
              </div>
              <div className="max-w-sm">
                <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                  Database Management
                </h3>
                <p className="text-Gray-1 mt-1 font-sans font-medium leading-relaxed">
                  Efficiently managing and optimizing your data for reliability
                  and performance. I design and implement robust database
                  systems that ensure data integrity and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="bg-dark-1 flex flex-col min-h-[135vh]  md:ml-64">
          <div className="relative w-full text-center">
            <p className="text-white font-poppins   mt-5 absolute inset-x-0 right-0 mx-auto  top-2 pt-14 font-semibold text-4xl">
              Resume
            </p>
            <h1 className="text-Gray-1 opacity-5 text-9xl pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              SUMMARY
            </h1>
          </div>

          {/* Section Titles */}
          <div className="flex flex-col mx-10 md:flex-row md:justify-between md:ml-10 ml-4 gap-4 mt-7">
            <div className="flex flex-col">
              <h1 className="text-white font-bold font-poppins text-2xl mb-4">
                My Education
              </h1>
              <div className="grid grid-cols-1 gap-10">
                <div className="bg-dark-2 relative w-full h-[245px] rounded shadow p-5">
                  <button className="rounded w-fit text-white bg-emerald-400">
                    2018-2022
                  </button>
                  <h2 className="text-white font-serif font-bold mt-4">
                    B.E Mechanical Engineering
                  </h2>
                  <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                    Al Ameen Engineering College - Erode
                  </h3>
                  <h3 className="text-emerald-500 font-semibold mt-1">
                    CGPA - 7.76
                  </h3>
                  <p className="text-Gray-1 mt-2 font-sans font-medium">
                    <span className="text-emerald-300">"</span>My B.E. in
                    Mechanical Engineering equipped me with practical skills in
                    CAD modeling and project management, preparing me for a
                    dynamic career in engineering.
                    <span className="text-emerald-300">"</span>
                  </p>
                </div>

                <div className="bg-dark-2 relative w-full h-[245px] rounded shadow p-5">
                  <button className="rounded w-fit text-white bg-emerald-400">
                    2024 - Present
                  </button>
                  <h2 className="text-white font-serif font-bold mt-4">
                    MCA - Master of Computer Applications
                  </h2>
                  <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                    SRM University - Chennai
                  </h3>
                  <p className="text-Gray-1 mt-2 font-sans font-medium">
                    <span className="text-emerald-300">"</span>I am currently
                    pursuing a Master of Computer Applications (MCA) at SRM
                    University, Chennai, where I am honing my skills in software
                    development, database management, and advanced programming
                    techniques.<span className="text-emerald-300">"</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-4 mt-10 md:mt-0">
              <h1 className="text-white font-bold font-poppins text-2xl mb-4">
                My Experience & Skills
              </h1>
              <div className="grid grid-cols-1 gap-10">
                <div className="bg-dark-2 relative w-full h-[245px] rounded shadow p-5">
                  <button className="rounded w-fit text-white bg-emerald-400">
                    2024 - Present
                  </button>
                  <h2 className="text-white font-serif font-bold mt-4">
                    MERN Stack Developer - Intern
                  </h2>
                  <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                    Why Global Services - Chennai
                  </h3>
                  <p className="text-Gray-1 mt-2 font-sans font-medium">
                    <span className="text-emerald-300">"</span>As a MERN Stack
                    Developer Intern at Why Global Services in Chennai, I
                    contributed to building and maintaining dynamic web
                    applications, gaining hands-on experience in MongoDB,
                    Express.js, React, and Node.js.
                    <span className="text-emerald-300">"</span>
                  </p>
                </div>

                <div className="bg-dark-2 relative w-full h-[245px] rounded shadow p-5">
                  <button className="rounded w-fit text-white bg-emerald-400 font-semibold">
                    My-Skills
                  </button>
                  <h2 className="text-white font-serif font-bold mt-4">
                    Technical Skills
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;HTML5/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;CSS3/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Bootstrap/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Tailwind Css/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Javascript/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;React.js/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Node.js/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Express.js/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;MongoDB/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;UI/UX/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;Figma/&gt;
                    </button>
                    <button className="text-emerald-300 rounded bg-Gray-1">
                      &lt;MongoDB/&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="bg-dark-2 flex flex-col min-h-[150vh] ml-64">
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
      <footer>
        <div className="bg-dark-2 h-[180px] flex  items-center ml-64">
          <h2 className="text-gray-400 font-sans font-semibold ml-14 ">
            Copyright © 2024{" "}
            <span className="text-emerald-500">Sabari Sakthivel</span>. All
            Rights Reserved.
          </h2>
          <h2 className="text-gray-400 font-sans font-semibold ml-80">
            Terms & Policy <span className=" ml-10">Disclaimer</span>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Home;
