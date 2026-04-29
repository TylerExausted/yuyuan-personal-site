import { sections, experiences, projects, portfolioItems } from "./siteData.js";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(sections.length === 4, "Expected four clickable sections.");
assert(sections.some((section) => section.id === "hobby"), "Expected a hobby section.");
assert(sections.some((section) => section.id === "portfolio"), "Expected a portfolio section.");
assert(experiences.length >= 3, "Expected at least three experiences.");
assert(projects.length >= 2, "Expected at least two projects.");
assert(portfolioItems.length >= 4, "Expected at least four portfolio items.");

console.log("Smoke tests passed.");
