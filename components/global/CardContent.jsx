import React from "react";

export default function CardContent({ children }) {
  return <div style={styles.content}>{children}</div>;
}

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
