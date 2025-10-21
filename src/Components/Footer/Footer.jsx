import React from "react";

export default function FooterSection() {
  return (
    <footer className="py-6 bg-[#222222] text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-white">Moustafa Elsaqqa</span>. 
        All rights reserved.
      </p>
    </footer>
  );
}
