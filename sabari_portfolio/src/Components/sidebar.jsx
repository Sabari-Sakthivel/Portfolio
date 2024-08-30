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

  return (
    <div>
      <div
        className={classNames(
          "fixed top-0 left-0 bg-black text-white w-64 h-full transform transition-transform duration-300 ease-in-out",
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
              <Link
                to="/"
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
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
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
              </Link>
            </li>
            <li>
              <Link
                to="/what-i-do"
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
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
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
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
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
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
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
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex gap-5 justify-center mt-5">
          <a
            href="https://linkedin.com/in/Sabari-Sakthivel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://github.com/Sabari-Sakthivel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://twitter.com/Sabari-Sakthivel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={17} />
          </a>
          <a
            href="mailto:sabari8536@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaRegEnvelope size={17} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
