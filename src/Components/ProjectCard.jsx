import Reveal from "./Reveal";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ p, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="card card-hover group flex flex-col overflow-hidden">
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="relative block h-52 overflow-hidden" aria-label={`Open ${p.title}`}>
        <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => <span key={t} className="rounded-full bg-[var(--glow)] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)]">{t}</span>)}
        </div>
        <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
        <p className="muted mt-2 flex-1 text-sm leading-relaxed">{p.desc}</p>
        <div className="mt-5 flex gap-4 text-sm font-semibold">
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline">Live demo <FiExternalLink /></a>
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="muted inline-flex items-center gap-1.5 hover:text-[var(--text)]">Code <FiGithub /></a>
        </div>
      </div>
    </Reveal>
  );
}
