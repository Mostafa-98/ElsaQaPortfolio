import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:mostafaelsaqqa79@gmail.com?subject=${subject}&body=${body}`;
  };
  const contacts = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      href: "mailto:mostafaelsaqqa79@gmail.com",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moustafa-elsaqqa/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      href: "https://github.com/Mostafa-98",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      href: "https://wa.me/201013243373",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#F4EFED] dark:bg-[#111111] text-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000005] to-[#00000010] dark:via-[#ffffff05] dark:to-[#ffffff10]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-3xl md:text-4xl font-extrabold uppercase text-[#222222] dark:text-[#F4EFED] mb-14 tracking-wide"
      >
        Let’s Connect
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto bg-white dark:bg-[#1A1A1A] rounded-3xl shadow-lg p-8 md:p-10 text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#222222] dark:focus:ring-[#F4EFED]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={onChange}
              placeholder="Your email"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#222222] dark:focus:ring-[#F4EFED]"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={onChange}
            rows="5"
            placeholder="Write your message..."
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#222222] dark:focus:ring-[#F4EFED]"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-8 w-full py-3 rounded-xl bg-[#222222] dark:bg-[#F4EFED] text-[#F4EFED] dark:text-[#222222] font-semibold tracking-wide transition-all duration-300 hover:shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Icons */}
      <div className="relative flex flex-wrap justify-center gap-6 mt-16 max-w-3xl mx-auto">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col items-center justify-center
              w-[120px] h-[120px] rounded-2xl shadow-md bg-gradient-to-br ${item.color}
              text-white overflow-hidden cursor-pointer transition-all duration-500`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="mb-2">{item.icon}</div>
            <span className="font-semibold tracking-wide text-sm">{item.label}</span>
          </motion.a>
        ))}
      </div>

      {/* Call to action */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mt-12 text-gray-600 dark:text-gray-400 text-sm"
      >
        Prefer email? Write to mostafaelsaqqa79@gmail.com.
      </motion.p>
    </section>
  );
}
