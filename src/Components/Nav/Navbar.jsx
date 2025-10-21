import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync with theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 0v2M10 18v2M0 10h2M18 10h2M3.22 3.22l1.42 1.42M15.36 15.36l1.42 1.42M3.22 16.78l1.42-1.42M15.36 4.64l1.42-1.42" />
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.8 13.75a1 1 0 00-.86-.5A7.49 7.49 0 0110.52 2a1 1 0 00-.83-1.5h-.12a9.5 9.5 0 108.23 14.25 1 1 0 00.004-.99z" />
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F4EFED]/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-wide text-[#222] dark:text-[#F4EFED]">
            ElsaQa
          </span>
        </Link>

        {/* Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-4 md:order-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600
                       bg-white dark:bg-[#222] text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#222] dark:text-[#F4EFED] p-2 rounded-md hover:bg-[#222]/10 dark:hover:bg-[#F4EFED]/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:space-x-8 md:order-1">
          <ul className="flex items-center text-center font-semibold text-lg tracking-wide">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`block py-3 md:py-0 px-3 transition-colors duration-300
                    ${location.pathname === link.path
                      ? "text-[#222] dark:text-[#F4EFED]"
                      : "text-gray-700 dark:text-gray-400"
                    } hover:text-[#222] dark:hover:text-[#F4EFED]`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <AnimatePresence>
                    {location.pathname === link.path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#222] dark:bg-[#F4EFED]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-[#F4EFED] dark:bg-[#1C1C1C] shadow-xl p-6 z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()} // prevent closing when clicking inside menu
            >
              <ul className="flex flex-col gap-6 mt-10 font-semibold text-lg">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-[#222] dark:text-[#F4EFED] hover:text-[#555] dark:hover:text-[#ccc] transition-colors`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
