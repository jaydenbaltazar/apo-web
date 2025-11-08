import React, { useState, useEffect } from "react";
import leftLogo from "../../src/assets/logo1.png"
import rightLogo from "../../src/assets/logo2.png"


export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === MOBILE VIEW ===
  if (isMobile) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Welcome to Alpha Phi Omega<br />Golf Club USA
          </h1>

          <p style={styles.subtitle}>
            Fellowship, Leadership, and Service through Golf
          </p>

          <p style={styles.description}>
            Alpha Phi Omega Golf Club USA is a fellowship of Alpha Phi Omega alumni and
            friends who share a passion for golf, brotherhood, and community service.
            Founded in Southern California, our club promotes camaraderie, leadership,
            and service through monthly tournaments rotating across four regions.
          </p>

          {/* <button style={styles.button}>Learn More About Us</button> */}
        </div>
      </section>
    );
  }

  // === DESKTOP VIEW ===
  return (
    <section style={styles.section}>
      <div style={styles.desktopContainer}>
        {/* Left Logo Placeholder */}
        <div style={styles.logoPlaceholderLeft}>
          <img src={leftLogo} alt="Left Logo" style={styles.logoImage} />
        </div>

        {/* Center Text Content */}
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            Welcome to Alpha Phi Omega<br />Golf Club USA
          </h1>

          <p style={styles.subtitle}>
            Fellowship, Leadership, and Service through Golf
          </p>

          <p style={styles.description}>
            Alpha Phi Omega Golf Club USA is a fellowship of Alpha Phi Omega alumni and
            friends who share a passion for golf, brotherhood, and community service.
            Founded in Southern California, our club promotes camaraderie, leadership,
            and service through monthly tournaments rotating across four regions.
          </p>

          {/* <button style={styles.button}>Learn More About Us</button> */}
        </div>

        {/* Right Logo Placeholder */}
        <div style={styles.logoPlaceholderRight}>
          <div style={styles.logoBox}>
            <img src={rightLogo} alt="Right Logo" style={styles.logoImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    color: "white",
    backgroundImage:
      "linear-gradient(rgba(0,43,127,0.65), rgba(0,43,127,0.75)), url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "4rem 1rem",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: "900px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },

  // Desktop Layout
  desktopContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 3rem",
    boxSizing: "border-box",
  },

  textContainer: {
    flex: "1",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },

  logoPlaceholderLeft: {
    flex: "0 0 150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "-2rem",
  },

  logoPlaceholderRight: {
    flex: "0 0 150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0rem",
  },

  logoBox: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "2px solid #ffd700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffd700",
    fontWeight: "600",
    fontSize: "1rem",
    textAlign: "center",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.3",
    margin: "0.5rem 0",
  },

  subtitle: {
    color: "#ffd700",
    fontStyle: "italic",
    fontSize: "1.25rem",
    fontWeight: 500,
  },

  description: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.9)",
    lineHeight: "1.6",
    maxWidth: "700px",
  },

  button: {
    backgroundColor: "#ffd700",
    color: "#002b7f",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "0.9rem 1.8rem",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    marginTop: "1.5rem",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
};
