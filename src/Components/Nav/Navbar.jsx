import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "border-[var(--border)] bg-[var(--bg)]/80 shadow-lg backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="font-display text-xl font-bold">
          Elsa<span className="gradient-text">Qa</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = location.pathname === l.path;
            return (
              <li key={l.path} className="relative">
                <Link to={l.path} className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "text-[var(--text)]" : "muted hover:text-[var(--text)]"}`}>
                  {active && (
                    <motion.span layoutId="navpill" className="absolute inset-0 -z-10 rounded-full border border-[var(--border)] bg-[var(--surface)]" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle dark mode" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition-transform hover:scale-110">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-[var(--border)] bg-[var(--bg)]/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className={`block rounded-2xl px-4 py-3 font-medium ${location.pathname === l.path ? "bg-[var(--surface)]" : "muted"}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
