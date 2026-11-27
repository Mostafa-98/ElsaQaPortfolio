import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiSend, FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";

const contacts = [
  { icon: <FaEnvelope />, label: "Email", value: "mostafaelsaqqa79@gmail.com", href: "mailto:mostafaelsaqqa79@gmail.com" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "moustafa-elsaqqa", href: "https://www.linkedin.com/in/moustafa-elsaqqa/" },
  { icon: <FaGithub />, label: "GitHub", value: "Mostafa-98", href: "https://github.com/Mostafa-98" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "Chat with me", href: "https://wa.me/201013243373" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:mostafaelsaqqa79@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="aurora" />
      <div className="wrap relative z-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h2 className="h2">Let's work together.</h2>
          <p className="muted mt-4 text-lg">Have a page or a small app to build? Send a message and I'll get back to you.</p>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid content-start gap-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07} y={20}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card card-hover group flex items-center gap-4 p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-xl text-white">{c.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{c.label}</span>
                    <span className="muted block truncate text-sm">{c.value}</span>
                  </span>
                  <FiArrowUpRight className="muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <form onSubmit={onSubmit} className="card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">Name
                  <input className="input mt-2 font-normal" type="text" name="name" required value={form.name} onChange={onChange} placeholder="Your name" />
                </label>
                <label className="block text-sm font-semibold">Email
                  <input className="input mt-2 font-normal" type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@example.com" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">Message
                <textarea className="input mt-2 font-normal" name="message" required rows="6" value={form.message} onChange={onChange} placeholder="Tell me about your project..." />
              </label>
              <button type="submit" className="btn btn-primary mt-6 w-full">Send message <FiSend /></button>
              <p className="muted mt-3 text-center text-xs">Opens your email app with the message ready to send.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
