import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const location = useLocation(); // Get the current route

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-[#F4EFED] dark:bg-[#222222] w-full z-20 top-0 start-0 text-[#222222] border-gray-200 dark:border-[#222222]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-[#222222] whitespace-nowrap text-3xl font-extrabold dark:text-white">
            ElsaQa
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label="Toggle dark mode"
            className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <svg
                data-toggle-icon="sun"
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
            ) : (
              <svg
                data-toggle-icon="moon"
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
            )}
            <span className="sr-only">Toggle dark/light mode</span>
          </button>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#222222] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#F4EFED] dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <title>Open main menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-[#222222] md:dark:bg-[#222222] dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`hover:scale-110 font-extrabold text-xl transition-all block py-2 px-3 ${
                  location.pathname === "/" ? "border-b-2 border-[#F4EFED]" : ""
                } text-[#222222] md:p-0 dark:text-[#F4EFED]`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:scale-110 font-extrabold text-xl transition-all block py-2 px-3 ${
                  location.pathname === "/about"
                    ? "border-b-2 border-[#F4EFED]"
                    : ""
                } text-[#222222] md:p-0 dark:text-[#F4EFED]`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`hover:scale-110 font-extrabold text-xl transition-all block py-2 px-3 ${
                  location.pathname === "/projects"
                    ? "border-b-2 border-[#F4EFED]"
                    : ""
                } text-[#222222] md:p-0 dark:text-[#F4EFED]`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:scale-110 font-extrabold text-xl transition-all block py-2 px-3 ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-[#F4EFED]"
                    : ""
                } text-[#222222] md:p-0 dark:text-[#F4EFED]`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;