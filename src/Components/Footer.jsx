import React from "react";
import { NavLink, Link ,useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
    const location = useLocation();
    const containerMargin = location.pathname === "/contact" ? "mt-[800px] md:mt-[400px] " : "mt-0";
  return (
    <footer className={`text-white pt-[100px] pb-[30px] ${containerMargin}`}>
      <div className="container px-4 mx-auto">
        {/* Top Section */}
        <div className="w-full mb-8">
          <div className="relative flex flex-col md:flex-row justify-around bg-gray-800 p-10 rounded-lg overflow-hidden text-center">
            <h5 className="text-2xl font-semibold mb-4">
              Let's start something awesome analytics together.
            </h5>
            <Link
              to="/what-we-do"
              className="inline-flex space-x-2 items-center mx-12 md:mx-0 bg-white text-sm md:text-lg text-gray-900 font-bold px-6 py-3 rounded-sm shadow hover:bg-gray-100 transition"
            >
              <FiMail />
              <span>Get started</span>
            </Link>
            <div className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-green-400"></div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          {/* Logo */}
          <div className="mb-4 lg:mb-0">
            <Link to="/">
              <img
                src="https://craftohtml.themezaa.com/images/demo-data-analysis-logo-black@2x.png"
                alt="Logo"
                className="w-32 h-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-4 md:gap-10 text-lg text-black font-semibold justify-center lg:justify-end">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/what-we-do"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                What we do
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cases"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center text-black justify-between border-t border-gray-700 pt-6 pb-4">
          {/* Left Text */}
          <p className="text-sm md:text-left text-center max-w-2xl mb-4 md:mb-0">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              terms of service
            </a>{" "}
            apply. You must not use this website if you disagree with any of
            these website standard terms and conditions.
          </p>

          {/* Social Icons */}
          <ul className="flex gap-4 justify-center md:justify-end text-xl">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="http://www.dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaDribbble />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
