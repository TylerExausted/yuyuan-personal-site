import React, { useState } from "react";
import { motion } from "framer-motion";
import { sections, experiences, projects, portfolioItems } from "./siteData";

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const selected = sections.find((section) => section.id === activeSection);

  function handleResumeRequest(event) {
    event.preventDefault();
    setRequestSent(true);
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 md:px-10">
        <button className="text-left text-sm tracking-[0.28em] text-zinc-400 transition hover:text-white">
          YUYUAN CHEN
        </button>
        <nav className="hidden items-center gap-7 text-sm text-zinc-500 md:flex">
          <button onClick={() => setActiveSection("education")} className="hover:text-white">Education</button>
          <button onClick={() => setActiveSection("work")} className="hover:text-white">Experience</button>
          <button onClick={() => setActiveSection("hobby")} className="hover:text-white">Hobby</button>
          <button onClick={() => setActiveSection("portfolio")} className="hover:text-white">Portfolio</button>
          <button onClick={() => setResumeOpen(true)} className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 hover:border-white hover:text-white">
            Resume
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pt-20">
        <section className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm tracking-[0.35em] text-zinc-500">ACTUARIAL SCIENCE · STATISTICS · MARKETS</p>
            <h1 className="max-w-3xl text-6xl font-normal leading-[0.95] tracking-[-0.06em] text-white md:text-8xl">
              Yuyuan Chen
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              I study actuarial science and statistics at the University of Waterloo. My work sits between insurance pricing, statistical modeling, financial analysis, and personal market research.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => setActiveSection("work")} className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                View Work
              </button>
              <button onClick={() => setResumeOpen(true)} className="rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-300 transition hover:border-white hover:text-white">
                Request Resume Access
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="border-l border-zinc-800 pl-6">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-600">Current note</p>
            <p className="mt-5 text-2xl font-light leading-10 text-zinc-200">
              Building a personal site that feels less like a resume template and more like a quiet archive of work, interests, and selected life moments.
            </p>
          </motion.div>
        </section>

        <section className="mt-24 grid gap-4 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.5 }}
              onClick={() => setActiveSection(section.id)}
              className="group min-h-[230px] rounded-[2rem] border border-zinc-850 bg-zinc-950/40 p-7 text-left transition hover:border-zinc-500 hover:bg-zinc-950"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm text-zinc-500">0{index + 1}</p>
                  <h2 className="mt-8 text-3xl font-normal tracking-[-0.04em] text-white">{section.title}</h2>
                </div>
                <span className="text-2xl text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">→</span>
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-400">{section.subtitle}</p>
              <p className="mt-3 text-sm text-zinc-600">{section.note}</p>
            </motion.button>
          ))}
        </section>

        <section className="mt-24 border-t border-zinc-900 pt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Selected lines</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <ListBlock title="Experience" items={experiences} />
            <ListBlock title="Projects" items={projects} />
          </div>
        </section>
      </main>

      {selected && (
        <Panel title={selected.title} onClose={() => setActiveSection(null)}>
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-600">{selected.subtitle}</p>
          <h2 className="mt-5 text-4xl font-normal tracking-[-0.04em] text-white">{selected.title}</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">{selected.detail}</p>
          <p className="mt-4 text-zinc-500">{selected.note}</p>

          {selected.id === "hobby" && (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <PhotoPlaceholder label="Basketball" />
              <PhotoPlaceholder label="Campus life" />
              <PhotoPlaceholder label="Travel / daily life" />
            </div>
          )}

          {selected.id === "education" && (
            <div className="mt-10 rounded-3xl border border-zinc-800 p-6">
              <p className="text-zinc-300">University of Waterloo</p>
              <p className="mt-2 text-zinc-500">Actuarial Science, Honours, Co-operative Program</p>
              <p className="mt-1 text-zinc-500">Statistics, Honours, Co-operative Program</p>
            </div>
          )}

          {selected.id === "portfolio" && (
            <div className="mt-10 space-y-4">
              {portfolioItems.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-850 px-5 py-4 text-zinc-300">{item}</div>
              ))}
            </div>
          )}
        </Panel>
      )}

      {resumeOpen && (
        <Panel title="Resume Access" onClose={() => { setResumeOpen(false); setRequestSent(false); }}>
          {!requestSent ? (
            <form onSubmit={handleResumeRequest} className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-600">Private document</p>
              <h2 className="text-4xl font-normal tracking-[-0.04em] text-white">Request resume access</h2>
              <p className="leading-7 text-zinc-400">
                My full resume is not publicly displayed. Please leave your information and I will review the request before sharing it.
              </p>
              <input required placeholder="Your name" className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-zinc-100 outline-none focus:border-zinc-500" />
              <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-zinc-100 outline-none focus:border-zinc-500" />
              <textarea placeholder="Reason for request" className="min-h-28 w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-zinc-100 outline-none focus:border-zinc-500" />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-zinc-200">Send Request</button>
            </form>
          ) : (
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-600">Request received</p>
              <h2 className="mt-5 text-4xl font-normal tracking-[-0.04em] text-white">Thank you.</h2>
              <p className="mt-6 leading-7 text-zinc-400">
                Your resume access request has been recorded in this demo. In the real version, this button can be connected to email, Google Forms, Formspree, or a small backend.
              </p>
            </div>
          )}
        </Panel>
      )}
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <p key={item} className="border-b border-zinc-900 pb-4 text-zinc-400">{item}</p>
        ))}
      </div>
    </div>
  );
}

function Panel({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-[2rem] border border-zinc-800 bg-black p-7 shadow-2xl md:p-10">
        <div className="mb-8 flex justify-end">
          <button onClick={onClose} className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition hover:border-white hover:text-white">
            Close
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

function PhotoPlaceholder({ label }) {
  return (
    <div className="flex aspect-[4/5] items-end rounded-[1.5rem] border border-dashed border-zinc-800 bg-zinc-950 p-5">
      <p className="text-sm text-zinc-500">{label} photos</p>
    </div>
  );
}
