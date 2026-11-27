import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/201013243373"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,.7)] hover:scale-105 transition-transform"
  >
    <span className="flex h-14 w-14 items-center justify-center text-3xl"><FaWhatsapp /></span>
    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem] group-hover:pr-5">Chat on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
