import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import profile from "../../src/assets/profile.jpeg";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the link is active based on the current URL
  const isActiveLink = (path) => location.pathname === path;
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 bg-black text-white w-64 h-screen py-4 overflow-y-scroll transform transition-transform duration-300 ease-in-out",
        {
          "translate-x-0": isOpen,
          "-translate-x-full": !isOpen,
        }
      )}
    >
      <div className="flex flex-col items-center pt-8">
        <img
          src={profile}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-8 border-gray-800"
        />
        <h1 className="font-serif text-2xl pt-4">Sabari Sakthivel</h1>
      </div>
      <nav className="mt-4 flex flex-col items-center">
        <ul className="space-y-2 w-full text-center">
          <li>
            <p
              onClick={() => scrollToSection("home")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/"),
                  "text-white": !isActiveLink("/"),
                },
                "text-center"
              )}
            >
              Home
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToSection("about-me")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/about-me"),
                  "text-white": !isActiveLink("/about-me"),
                },
                "text-center"
              )}
            >
              About Me
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToSection("what-i-do")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/what-i-do"),
                  "text-white": !isActiveLink("/what-i-do"),
                },
                "text-center"
              )}
            >
              What I Do
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToSection("resume")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/resume"),
                  "text-white": !isActiveLink("/resume"),
                },
                "text-center"
              )}
            >
              Resume
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToSection("portfolio")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/portfolio"),
                  "text-white": !isActiveLink("/portfolio"),
                },
                "text-center"
              )}
            >
              Portfolio
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToSection("contact")}
              className={classNames(
                "block py-2.5 px-4 rounded hover:text-emerald-500",
                {
                  "text-emerald-500": isActiveLink("/contact"),
                  "text-white": !isActiveLink("/contact"),
                },
                "text-center"
              )}
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
      <nav className="flex gap-6 mb-3 justify-center mt-5">
        <Link
          to="https://linkedin.com/in/Sabari-Sakthivel"
          className="hover:text-blue-500"
        >
          {" "}
          <FaLinkedin size={17} />
        </Link>

        <Link
          to="https://github.com/Sabari-Sakthivel"
          className="hover:text-gray-600"
        >
          <FaGithub size={17} />
        </Link>

        <Link
          to="https://twitter.com/Sabari-Sakthivel"
          className="hover:text-blue-400"
        >
          <FaTwitter size={17} />
        </Link>

        <Link
         to="mailto:sabari8536@gmail.com" 
         className="hover:text-gray-600">
          <FaRegEnvelope size={17} />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
