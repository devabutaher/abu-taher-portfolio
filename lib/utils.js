export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Clamps a number between a min and max value
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
