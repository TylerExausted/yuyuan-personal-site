import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const sections = [
  {
    id: "education",
    number: "01",
    title: "Education",
    eyebrow: "Academic background",
    subtitle: "University of Waterloo",
    detail: "Actuarial Science & Statistics, Honours Co-operative Program.",
    note: "Expected Apr 2027 · Cumulative GPA 90.44",
  },
  {
    id: "work",
    number: "02",
    title: "Experience",
    eyebrow: "Professional work",
    subtitle: "Actuarial, insurance, and forensic accounting",
    detail: "Experience across auto insurance pricing, rate filing analysis, actuarial model review, Excel/VBA workflow support, and forensic accounting analysis.",
    note: "Allstate · FSRA · MDD Forensic Accountants",
  },
  {
    id: "hobby",
    number: "03",
    title: "Hobbies",
    eyebrow: "Outside work",
    subtitle: "Basketball, fitness, and everyday life",
    detail: "A personal section for basketball, gym life, travel, campus moments, and photos that make the site feel less like a resume page.",
    note: "Photo gallery placeholder ready.",
  },
  {
    id: "portfolio",
    number: "04",
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
    setResumeOpen(false);
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
    <div className="site-shell">
      <div className="background-glow" />

      <header className="site-header">
        <button className="brand-pill" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          YUYUAN CHEN
        </button>

        <nav className="top-nav">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => openSection(section.id)}>
              {section.title}
            </button>
          ))}
          <button type="button" className="nav-resume" onClick={openResume}>
            Resume
          </button>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="kicker">Actuarial Science · Statistics · Markets</p>
            <h1>Yuyuan Chen</h1>
            <p className="hero-copy">
              I study actuarial science and statistics at the University of Waterloo. My work sits between insurance pricing, statistical modeling, financial analysis, and personal market research.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => openSection("work")}>
                View Work
              </button>
              <button type="button" className="secondary-button" onClick={openResume}>
                Request Resume Access
              </button>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="note-card">
            <p className="small-label">Current note</p>
            <p>
              A personal site designed as a quiet archive of work, interests, market notes, and selected life moments — not just a resume template.
            </p>
          </motion.aside>
        </section>

        <section className="section-grid">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.5 }}
              onClick={() => openSection(section.id)}
              className="section-card"
            >
              <div className="section-card-top">
                <div>
                  <p className="card-number">{section.number}</p>
                  <p className="card-eyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                </div>
                <span className="arrow-pill">→</span>
              </div>
              <p className="card-subtitle">{section.subtitle}</p>
              <p className="card-note">{section.note}</p>
            </motion.button>
          ))}
        </section>

        <section className="selected-lines">
          <p className="small-label">Selected lines</p>
          <div className="line-grid">
            <div>
              <h3>Experience</h3>
              <div className="line-list">
                {experiences.map((item) => (
                  <button key={item} type="button" onClick={() => openSection("work")} className="line-item">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3>Projects</h3>
              <div className="line-list">
                {projects.map((item) => (
                  <button key={item} type="button" onClick={() => openSection(item.includes("Stock") ? "portfolio" : "work")} className="line-item">
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
            <p className="small-label">{selected.eyebrow}</p>
            <h2 className="panel-title">{selected.title}</h2>
            <p className="panel-copy">{selected.detail}</p>
            <p className="panel-muted">{selected.note}</p>

            {selected.id === "education" && (
              <div className="detail-stack">
                <DetailCard title="University of Waterloo" text="Actuarial Science, Honours, Co-operative Program" />
                <DetailCard title="Second Major" text="Statistics, Honours, Co-operative Program" />
                <DetailCard title="Certificates" text="Passed CAS MAS-I, SOA Exam P, SOA Exam FM, and completed the Canadian Securities Course." />
              </div>
            )}

            {selected.id === "work" && (
              <div className="detail-stack">
                {experiences.map((item) => (
                  <DetailCard key={item} title={item.split(" · ")[0]} text={item.split(" · ")[1]} />
                ))}
              </div>
            )}

            {selected.id === "hobby" && (
              <div className="photo-grid">
                <PhotoPlaceholder label="Basketball" />
                <PhotoPlaceholder label="Campus life" />
                <PhotoPlaceholder label="Travel / daily life" />
              </div>
            )}

            {selected.id === "portfolio" && (
              <div className="detail-stack">
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
              <form onSubmit={handleResumeRequest} className="request-form">
                <p className="small-label">Private document</p>
                <h2 className="panel-title">Request resume access</h2>
                <p className="panel-copy">
                  My full resume is not displayed publicly. Please leave your information and I will review the request before sharing it.
                </p>
                <input required placeholder="Your name" />
                <input required type="email" placeholder="Email" />
                <textarea placeholder="Reason for request" />
                <button type="submit" className="primary-button">Send Request</button>
              </form>
            ) : (
              <div>
                <p className="small-label">Request received</p>
                <h2 className="panel-title">Thank you.</h2>
                <p className="panel-copy">
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
      className="panel-backdrop"
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
        className="panel-card"
      >
        <div className="panel-close-row">
          <button type="button" onClick={onClose} className="close-button">Close</button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function DetailCard({ title, text }) {
  return (
    <div className="detail-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function PhotoPlaceholder({ label }) {
  return (
    <button type="button" className="photo-placeholder">
      <span>{label}</span>
      <small>Click-ready photo slot</small>
    </button>
  );
}
