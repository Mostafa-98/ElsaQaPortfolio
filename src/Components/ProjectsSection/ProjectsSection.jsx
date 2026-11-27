import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../Reveal";
import ProjectCard from "../ProjectCard";
import projects from "../projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured projects</span>
            <h2 className="h2">Things I've built, live and on GitHub.</h2>
          </div>
          <Link to="/projects" className="btn btn-ghost">All projects <FiArrowRight /></Link>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
