import { AlignCenter } from "lucide-react";
import React, { useState } from "react";

export default function Card({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover
          ? "0 12px 28px rgba(0,0,0,0.12)"
          : "0 6px 18px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    marginBottom: "2.5rem",
    transition: "all 0.25s ease-in-out",
    boxSizing: "border-box",
  },
};
