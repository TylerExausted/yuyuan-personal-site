import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "education",
    title: "Education",
    eyebrow: "Academic background",
    subtitle: "University of Waterloo",
    detail: "Actuarial Science & Statistics, Honours Co-operative Program.",
    note: "Expected Apr 2027 · Cumulative GPA 90.44",
  },
  {
    id: "work",
    title: "Experience",
    eyebrow: "Professional work",
    subtitle: "Actuarial, insurance, and forensic accounting",
    detail: "Experience across auto insurance pricing, rate filing analysis, actuarial model review, Excel/VBA workflow support, and forensic accounting analysis.",
    note: "Allstate · FSRA · MDD Forensic Accountants",
  },
  {
    id: "hobby",
    title: "Hobbies",
    eyebrow: "Outside work",
    subtitle: "Basketball, fitness, and everyday life",
    detail: "A more personal section for basketball, gym life, travel, campus moments, and photos that make the site feel less like a resume page.",
    note: "Photo gallery placeholder ready.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    eyebrow: "Market interest",
    subtitle: "Personal investing ideas and watchlist",
    detail: "A place to show selected portfolio themes, market views, stock research notes, and long-term investing logic.",
    note: "Can later include charts, allocation, and real holdings.",
  },
];

const experiences = [
  "Actuarial Analyst Summer Co-op · Allstate Insurance Company of Canada",
  "Actuarial Analyst Co-op · Financial Services Regulatory Authority of Ontario",
  "Accounting Co-op Student · MDD Forensic Accountants",
];

const projects = [
  "USD/CAD Exchange Rate Forecasting · Time Series · R",
  "Stock Picking Research & Trading Competition · Top 10% · 20% return",
];

const portfolioItems = [
  "Core equity exposure",
  "Silver / SLV watchlist",
  "Bitcoin ETF / FBTC satellite position",
  "Cash for future opportunities",
];

function runSmokeTests() {
  console.assert(sections.length === 4, "Expected four clickable sections.");
  console.assert(sections.every((section) => section.id && section.title), "Every section needs an id and title.");
  console.assert(sections.some((section) => section.id === "hobby"), "Expected a hobby section.");
  console.assert(sections.some((section) => section.id === "portfolio"), "Expected a portfolio section.");
  console.assert(experiences.length >= 3, "Expected at least three experiences.");
  console.assert(projects.length >= 2, "Expected at least two projects.");
}

runSmokeTests();

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const selected = sections.find((section) => section.id === activeSection);

  function openSection(id) {
    setActiveSection(id);
    setRequestSent(false);
  }

  function openResume() {
    setResumeOpen(true);
    setActiveSection(null);
    setRequestSent(false);
  }

  function closePanel() {
    setActiveSection(null);
    setResumeOpen(false);
    setRequestSent(false);
  }

  function handleResumeRequest(event) {
    event.preventDefault();
    setRequestSent(true);
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(120,120,120,0.08),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.035),_transparent_35%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.32em] text-zinc-300 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
        >
          YUYUAN CHEN
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => openSection(section.id)}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              {section.title}
            </button>
          ))}
          <button
            type="button"
            onClick={openResume}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Resume
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-10 md:px-10 md:pt-20">
        <section className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-zinc-500">
              Actuarial Science · Statistics · Markets
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-8xl lg:text-9xl">
              Yuyuan Chen
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
              I study actuarial science and statistics at the University of Waterloo. My work sits between insurance pricing, statistical modeling, financial analysis, and personal market research.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openSection("work")}
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                View Work
              </button>
              <button
                type="button"
                onClick={openResume}
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
              >
                Request Resume Access
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">Current note</p>
            <p className="mt-5 text-2xl font-light leading-10 text-zinc-200">
              A personal site designed as a quiet archive of work, interests, market notes, and selected life moments — not just a resume template.
            </p>
          </motion.div>
        </section>

        <section className="mt-24 grid gap-4 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.5 }}
              onClick={() => openSection(section.id)}
              className="group min-h-[260px] rounded-[2rem] border border-white/10 bg-[#080808] p-7 text-left shadow-xl shadow-black/40 transition hover:-translate-y-1 hover:border-white/25 hover:bg-[#0d0d0d]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-600">0{index + 1}</p>
                  <p className="mt-8 text-sm text-zinc-500">{section.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">{section.title}</h2>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-2 text-xl text-zinc-500 transition group-hover:translate-x-1 group-hover:border-white/30 group-hover:text-white">
                  →
                </span>
              </div>
              <p className="mt-7 text-base leading-7 text-zinc-400">{section.subtitle}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{section.note}</p>
            </motion.button>
          ))}
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-[#070707] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">Selected lines</p>
          <div className="mt-9 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">Experience</h3>
              <div className="mt-6 space-y-4">
                {experiences.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => openSection("work")}
                    className="block w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-left text-zinc-400 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">Projects</h3>
              <div className="mt-6 space-y-4">
                {projects.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => openSection(item.includes("Stock") ? "portfolio" : "work")}
                    className="block w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-left text-zinc-400 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selected && (
          <Panel title={selected.title} onClose={closePanel}>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">{selected.eyebrow}</p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white">{selected.title}</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{selected.detail}</p>
            <p className="mt-4 text-zinc-500">{selected.note}</p>

            {selected.id === "education" && (
              <div className="mt-10 grid gap-4">
                <DetailCard title="University of Waterloo" text="Actuarial Science, Honours, Co-operative Program" />
                <DetailCard title="Second Major" text="Statistics, Honours, Co-operative Program" />
                <DetailCard title="Certificates" text="Passed CAS MAS-I, SOA Exam P, SOA Exam FM, and completed the Canadian Securities Course." />
              </div>
            )}

            {selected.id === "work" && (
              <div className="mt-10 grid gap-4">
                {experiences.map((item) => (
                  <DetailCard key={item} title={item.split(" · ")[0]} text={item.split(" · ")[1]} />
                ))}
              </div>
            )}

            {selected.id === "hobby" && (
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <PhotoPlaceholder label="Basketball" />
                <PhotoPlaceholder label="Campus life" />
                <PhotoPlaceholder label="Travel / daily life" />
              </div>
            )}

            {selected.id === "portfolio" && (
              <div className="mt-10 space-y-4">
                {portfolioItems.map((item) => (
                  <DetailCard key={item} title={item} text="Placeholder for personal thesis, allocation notes, and supporting charts." />
                ))}
              </div>
            )}
          </Panel>
        )}

        {resumeOpen && (
          <Panel title="Resume Access" onClose={closePanel}>
            {!requestSent ? (
              <form onSubmit={handleResumeRequest} className="space-y-5">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">Private document</p>
                <h2 className="text-5xl font-medium tracking-[-0.06em] text-white">Request resume access</h2>
                <p className="leading-7 text-zinc-400">
                  My full resume is not displayed publicly. Please leave your information and I will review the request before sharing it.
                </p>
                <input required placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
                <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
                <textarea placeholder="Reason for request" className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
                <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Send Request
                </button>
              </form>
            ) : (
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">Request received</p>
                <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white">Thank you.</h2>
                <p className="mt-6 leading-7 text-zinc-400">
                  Your request has been recorded in this demo. In the live version, this can be connected to email, Google Forms, Formspree, or a small backend.
                </p>
              </div>
            )}
          </Panel>
        )}
      </AnimatePresence>
    </div>
  );
}

function Panel({ title, children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onMouseDown={(event) => event.stopPropagation()}
        className="mx-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#060606] p-7 shadow-2xl shadow-black md:p-10"
      >
        <div className="mb-8 flex justify-end">
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition hover:border-white/40 hover:text-white">
            Close
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function DetailCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function PhotoPlaceholder({ label }) {
  return (
    <button type="button" className="group flex aspect-[4/5] items-end rounded-[1.5rem] border border-dashed border-white/15 bg-[#0a0a0a] p-5 text-left transition hover:border-white/35 hover:bg-[#111]">
      <div>
        <p className="text-sm text-zinc-500 group-hover:text-zinc-300">{label}</p>
        <p className="mt-2 text-xs text-zinc-700 group-hover:text-zinc-500">Click-ready photo slot</p>
      </div>
    </button>
  );
}
