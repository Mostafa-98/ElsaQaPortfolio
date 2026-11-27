import React from "react";

export default function FooterSection() {
  return (
    <footer className="py-8 bg-[#222222] text-center text-gray-400 text-sm">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/Mostafa-98" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/moustafa-elsaqqa/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        <a href="mailto:mostafaelsaqqa79@gmail.com" className="hover:text-white">Email</a>
      </div>
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-white">Moustafa Elsaqqa</span>.
        All rights reserved.
      </p>
    </footer>
  );
}
