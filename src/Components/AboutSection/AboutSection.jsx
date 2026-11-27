import React from "react";
import { Link } from "react-router-dom";
import { FiCode, FiLayers, FiSmile, FiArrowRight } from "react-icons/fi";
import Reveal from "../Reveal";

const items = [
  { icon: <FiCode />, title: "Technical", text: "Clean, optimized code following best practices for speed, accessibility, and reliability." },
  { icon: <FiLayers />, title: "Beautiful", text: "Thoughtful UI that balances simplicity with a modern, visually engaging look." },
  { icon: <FiSmile />, title: "Easy to use", text: "Every interface is designed to be intuitive and enjoyable to use on any screen." },
];

export default function AboutSection() {
  return (
    <section className="section bg-[var(--bg2)]">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What I do</span>
          <h2 className="h2">Front-end work built on three principles.</h2>
          <p className="muted mt-4 text-lg leading-relaxed">
            I build front-end experiences with React that perform well and are pleasant to use.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1} className="card card-hover p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-xl text-white">{it.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
              <p className="muted mt-2 leading-relaxed">{it.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10">
          <Link to="/about" className="btn btn-ghost">More about me <FiArrowRight /></Link>
        </Reveal>
      </div>
    </section>
  );
}
