import React, { useState } from "react";

export default function Button({ label, onClick, fullWidth = false }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{
        ...styles.button,
        width: fullWidth ? "100%" : "auto",
        backgroundColor: hover ? "#ffed4e" : "#ffd700",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
}

const styles = {
  button: {
    color: "#002b7f",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "0.9rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
