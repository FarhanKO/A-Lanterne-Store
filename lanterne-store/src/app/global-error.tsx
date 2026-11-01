"use client";

// Last-resort fallback if the root layout itself fails. It replaces the whole
// document, so it carries its own minimal styles.
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <html lang="en">
      <title>Something went wrong · Lanterne</title>
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#0e0c0a", color: "#f3eee6", fontFamily: "Georgia, serif", textAlign: "center", padding: "24px" }}>
        <div>
          <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f3b46e" }}>Lanterne</p>
          <h1 style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", fontWeight: 400, margin: "16px 0" }}>The lights went out.</h1>
          <p style={{ opacity: 0.7, fontFamily: "system-ui, sans-serif" }}>Something failed to load. Please try again.</p>
          <button
            type="button"
            onClick={() => retry()}
            style={{ marginTop: 24, height: 48, padding: "0 28px", borderRadius: 999, border: 0, background: "#e0893a", color: "#0e0c0a", fontSize: 16, cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
