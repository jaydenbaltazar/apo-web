import React from "react";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone } from "lucide-react";
import logo from "../../src/assets/logo1.png";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT SECTION */}
        <div style={styles.column}>
          <div style={styles.logoRow}>
            <div style={styles.logoWrapper}>
              <img src={logo} alt="APO Golf Club Logo" style={styles.logoImage} />
            </div>
            <div>
              <h3 style={styles.clubName}>APO Golf Club USA</h3>
              <p style={styles.tagline}>Fellowship Through Golf</p>
            </div>
          </div>
          <p style={styles.about}>
            A fellowship of Alpha Phi Omega alumni and friends who share a passion for golf,
            brotherhood, and community service.
          </p>
        </div>

        {/* CENTER SECTION */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Us</h4>
          <div style={styles.contactItem}>
            <Mail size={18} color="#FFD700" style={styles.icon} />
            <span style={styles.contactText}>connect@apogolfclubusa.org</span>
          </div>
          <div style={styles.contactItem}>
            <Phone size={18} color="#FFD700" style={styles.icon} />
            <span style={styles.contactText}>Regional Coordinators Available</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socials}>
            <div style={styles.socialCircle}>
              <Facebook size={18} color="#fff" />
            </div>
            <div style={styles.socialCircle}>
              <Instagram size={18} color="#fff" />
            </div>
            <div style={styles.socialCircle}>
              <Youtube size={18} color="#fff" />
            </div>
            <div style={styles.socialCircle}>
              <Twitter size={18} color="#fff" />
            </div>
          </div>
          <div style={styles.payments}>
            <p style={styles.paymentTitle}>Future Payment Options:</p>
            <p style={styles.paymentList}>PayPal • Stripe • Zelle • Venmo</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} - BSCS | Alpha Phi Omega Golf Club USA. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}

const styles = {
  logoWrapper: {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  overflow: "hidden",      // ✅ ensures the image stays circular
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFD700", // optional — keeps a border effect if logo has transparency
  flexShrink: 0,
},
logoImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",      // ✅ makes sure it fills the circle evenly
},
  footer: {
    backgroundColor: "#002b7f",
    color: "white",
    padding: "4rem 1rem 1.5rem 1rem",
    borderTop: "4px solid #FFD700",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    overflowX: "hidden", // 👈 prevents horizontal cutoff/scroll issues
    boxSizing: "border-box", // 👈 ensures padding doesn't push content off-screen
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "3rem",
  },
  column: {
    flex: "1 1 300px",
    minWidth: "250px",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  logoCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#FFD700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  logoText: {
    color: "#002b7f",
    fontWeight: "700",
    fontSize: "1.5rem",
  },
  clubName: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "white",
    margin: 0,
  },
  tagline: {
    fontSize: "0.95rem",
    color: "#cbd5e1",
    margin: 0,
  },
  about: {
    fontSize: "0.95rem",
    color: "#e2e8f0",
    lineHeight: "1.6",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.7rem",
  },
  contactText: {
    color: "#e2e8f0",
    fontSize: "0.95rem",
  },
  icon: {
    flexShrink: 0,
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1rem",
  },
  socialCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
  },
  payments: {
    marginTop: "0.5rem",
  },
  paymentTitle: {
    fontSize: "0.95rem",
    color: "#cbd5e1",
    marginBottom: "0.2rem",
  },
  paymentList: {
    fontSize: "0.9rem",
    color: "#fff",
  },
  bottomBar: {
    marginTop: "3rem",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "1rem",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    width: "100%",
  },
};
