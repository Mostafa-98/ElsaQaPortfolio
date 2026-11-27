import React from "react";
import Reveal from "../Reveal";
import globe from "./../../assets/images/globe.png";
import { FiCheck } from "react-icons/fi";

const help = [
  ["Responsive web pages", "landing pages and small sites built with React and Tailwind CSS that work on phones and desktops."],
  ["Design to code", "turning a ready design into a clean React page."],
  ["Data-driven interfaces", "dashboards, forms and lists that talk to an API, like my CRUD dashboard and store."],
];

const About = () => (
  <section id="about" className="section relative overflow-hidden pt-36">
    <div className="aurora" />
    <div className="wrap relative z-10">
      <Reveal>
        <span className="eyebrow">About me</span>
        <h1 className="h2 !text-4xl sm:!text-5xl">A front-end developer who ships.</h1>
      </Reveal>

      <div className="mt-12 grid items-center gap-12 md:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] opacity-25 blur-2xl" />
            <img src={globe} alt="About illustration" className="relative mx-auto w-4/5 rounded-3xl border border-[var(--border)] object-cover md:w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="muted space-y-4 text-lg leading-relaxed">
          <p>
            <span className="font-display text-2xl font-bold text-[var(--text)]">Hi, I'm Moustafa.</span>{" "}
            I'm a <strong className="text-[var(--text)]">front-end developer</strong> from Menoufia, Egypt. I build clean,
            responsive web apps with <strong className="gradient-text">React, JavaScript and Tailwind CSS</strong>.
          </p>
          <p>
            I learned front-end development through training and by building real projects. Everything in this portfolio is
            something I built myself, and each project links to a live demo and its code on GitHub.
          </p>
          <p>
            My projects include an e-commerce store with sign-in, cart and checkout, a CRUD dashboard, a recipe finder, a
            weather app and a random quotes generator. I care about readable code, responsive layouts and interfaces that are
            easy to use.
          </p>
          <p className="font-semibold text-[var(--text)]">
            I'm open to junior front-end roles and freelance work. If you have a page or a small app to build, get in touch.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <h2 className="text-2xl font-bold md:text-3xl">What I can help with</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {help.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.1} className="card card-hover p-7">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--glow)] text-[var(--accent)]"><FiCheck /></span>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="muted mt-2 text-sm leading-relaxed">{d}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <p className="muted text-lg italic">"Keep it simple, make it work, then make it nice."</p>
      </Reveal>
    </div>
  </section>
);

export default About;
