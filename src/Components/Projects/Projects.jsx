import React from "react";
import Reveal from "../Reveal";
import ProjectCard from "../ProjectCard";
import projects from "../projects";

export default function ProjectsPage() {
  return (
    <section id="projects" className="section relative overflow-hidden pt-36">
      <div className="aurora" />
      <div className="wrap relative z-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Selected works</span>
          <h1 className="h2 !text-4xl sm:!text-5xl">All projects</h1>
          <p className="muted mt-4 text-lg">Each project has a live demo. The source code is on GitHub.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
        <Reveal className="mt-14 text-center">
          <a href="https://github.com/Mostafa-98" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View all repositories on GitHub</a>
        </Reveal>
      </div>
    </section>
  );
}
