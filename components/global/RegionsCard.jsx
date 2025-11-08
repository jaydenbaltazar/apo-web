import React, { useState } from "react";

export default function RegionsCard({ children, gradient }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hover
          ? "0 12px 25px rgba(0,0,0,0.15)"
          : "0 8px 20px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Top gradient bar */}
      <div style={{ ...styles.gradientBar, background: gradient }} />
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    flex: "1 1 500px", // ✅ ensures 2 per row, wraps to 1 on mobile
    maxWidth: "520px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },
  gradientBar: {
    height: "8px",
    width: "100%",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  content: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
  },
};
