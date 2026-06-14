// Kept for backward compatibility.
// ScrollIndicator wrapper has been removed from page.js in favour of
// the standalone <ScrollProgressBar /> component which avoids
// creating a secondary scroll container.
"use client";

export function ScrollIndicator({ children }) {
  return <>{children}</>;
}
