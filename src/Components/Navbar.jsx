import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full bg-white md:bg-pink-100 border-b border-gray-300 z-50 py-2 md:py-0">
        {/*  Top Headding */}
        <div className="w-full hidden md:block bg-gradient-to-r from-orange-600 via-purple-400 to-emerald-400">
          <div className="flex items-center justify-center h-[42px] px-4">
            <p className="text-white text-md text-center">
              Provide data analytics solutions for startup business enterprises.{" "}
              <a href="#" className="font-bold ">
                Explore services
                <i className="feather icon-feather-arrow-right ml-1"></i>
              </a>
            </p>
          </div>
        </div>
        {/* navbar */}
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://craftohtml.themezaa.com/images/demo-data-analysis-logo-black.png"
              alt="logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/what-we-do"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                What we do
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cases"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 font-semibold"
                    : "hover:text-gray-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="tel:1800222000"
              className="flex items-center font-semibold hover:text-gray-500"
            >
              <Phone className="w-4 h-4 mr-2 hover:text-gray-500" /> 1 800 222 000
            </a>
            <Link
              to="/contact"
              className="flex items-center bg-white text-gray-900 font-bold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              <Mail className="w-4 h-4 mr-2" /> Get a quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex items-center z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-white hover:text-gray-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
            <div className="fixed top-0 right-0 w-full h-full bg-gray-800 text-white shadow-lg p-10 pt-40 z-50 overflow-y-auto">
              <ul className="flex flex-col space-y-4">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/what-we-do"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    What we do
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/cases"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Cases
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/testimonials"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 font-semibold"
                        : "hover:text-gray-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
                <div className="w-full border-b border-gray-600"></div>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
