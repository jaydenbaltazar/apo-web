import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Star,
  DollarSign,
  Calculator,
  Flag,
  Users,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";

export default function Officers() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data for the current term
  const currentTerm = "2025 - 2026";
  const officers = [
    { role: "President", name: "Francis Franco", icon: Shield },
    { role: "Vice President", name: "PJ Aclan", icon: Star },
    { role: "Treasurer", name: "Beeboy Mansilla", icon: DollarSign },
    { role: "Handicap Chairman", name: "Mike Melendez", icon: Calculator },
    { role: "Tournament Director", name: "Manny Figuerres", icon: Flag },
  ];

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <Button
            onClick={() => navigate("/")}
            label={
              <span style={styles.backButtonLabel}>
                <ArrowLeft size={18} style={{ marginRight: 8 }} />
                Back to Home
              </span>
            }
            fullWidth={false}
          />
          <h1 style={styles.headerTitle}>Club Officers</h1>
          <p style={styles.headerSubtitle}>
            The leadership team guiding APOGC USA.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <Card>
          <CardContent>
            {/* Section Title */}
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircleBlue}>
                <Users size={24} color="#ffd700" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>Executive Committee</h2>
                <p style={styles.termLabel}>Term: {currentTerm}</p>
              </div>
            </div>

            {/* Officers Grid */}
            <div style={styles.grid}>
              {officers.map((officer, idx) => {
                const Icon = officer.icon;
                return (
                  <div key={idx} style={styles.officerCard}>
                    <div style={styles.officerIconWrapper}>
                      <Icon size={28} color="#002b7f" />
                    </div>
                    <div style={styles.officerInfo}>
                      <h3 style={styles.officerRole}>{officer.role}</h3>
                      <p style={styles.officerName}>{officer.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(to bottom, #f9fafb, #fff)",
  },
  header: {
    backgroundImage: `
        linear-gradient(
        rgba(0, 43, 127, 0.7),
        rgba(0, 43, 127, 0.7)
        ),
        url('https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGYlMjBjb3Vyc2V8ZW58MHwwfDB8fHww')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "4rem 1rem",
    textAlign: "left",
  },
  headerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  backButtonLabel: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: 500,
  },
  headerTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
  headerSubtitle: {
    fontSize: "1.2rem",
    color: "#a8c0ff",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "4rem 1rem",
  },

  // Section Header
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #e5e7eb",
    paddingTop: "2rem",
  },
  iconCircleBlue: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#002b7f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    color: "#002b7f",
    margin: 0,
  },
  termLabel: {
    fontSize: "1rem",
    color: "#6b7280",
    fontWeight: "600",
    margin: "0.2rem 0 0 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  // Officers Grid
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
  },
  officerCard: {
    flex: "1 1 300px", // Automatically wraps based on screen size
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "1.5rem",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  officerIconWrapper: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    backgroundColor: "#e0ecff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1.2rem",
    flexShrink: 0,
  },
  officerInfo: {
    display: "flex",
    flexDirection: "column",
  },
  officerRole: {
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 0.3rem 0",
  },
  officerName: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  },
};
