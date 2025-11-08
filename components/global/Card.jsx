import React from "react";

export default function Card({ children }) {
  return <div style={styles.card}>{children}</div>;
}

const styles = {
  card: {
    borderRadius: "16px",
    backgroundColor: "#fff",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    padding: "1rem",
  },
};
