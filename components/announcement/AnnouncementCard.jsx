import React, { useState } from "react";

export default function AnnouncementCard({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover
          ? "0 12px 30px rgba(0,0,0,0.1)"
          : "0 6px 15px rgba(0,0,0,0.06)",
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
    background: "linear-gradient(to bottom right, #ffffff, #f9fafb)",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
};
