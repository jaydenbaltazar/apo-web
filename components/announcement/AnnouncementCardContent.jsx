import React from "react";

export default function AnnouncementCardContent({ children }) {
  return <div style={styles.content}>{children}</div>;
}

const styles = {
  content: {
    padding: "2rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    backgroundColor: "#fff",
  },
};
