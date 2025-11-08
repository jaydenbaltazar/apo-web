import React from "react";

export default function CardContent({ children }) {
  return <div style={styles.content}>{children}</div>;
}

const styles = {
  content: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    lineHeight: "1.6",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "2rem",
  },
};
