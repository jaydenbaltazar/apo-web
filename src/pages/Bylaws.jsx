import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Scale,
  ExternalLink,
  DollarSign,
  CalendarDays,
  Trophy,
  FileText,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";

export default function Bylaws() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to open PDFs in a new tab
  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

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
          <h1 style={styles.headerTitle}>Constitution, By-Laws &, Policies</h1>
          <p style={styles.headerSubtitle}>
            The governing rules and operational policies of APOGC USA.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Two Column Layout Wrapper */}
        <div style={styles.twoColumnWrapper}>
          {/* === LEFT COLUMN: PDF VIEWER === */}
          <div style={styles.leftColumn}>
            <Card style={{ height: "100%" }}>
              <div style={styles.pdfHeader}>
                <div style={styles.pdfTitleGroup}>
                  <Scale size={24} color="#002b7f" />
                  <h2 style={styles.pdfTitle}>Constitution & By-Laws</h2>
                </div>
                {/* View in New Tab Button */}
                <Button
                  label={
                    <span style={styles.iconButtonText}>
                      <ExternalLink size={16} style={{ marginRight: 6 }} />
                      View Full Screen
                    </span>
                  }
                  onClick={() => openPdfInNewTab("bylaws/apo-cbl.pdf")}
                  variant="outline"
                  fullWidth={false}
                />
              </div>

              <div style={styles.pdfContainer}>
                {/* Looks inside the 'public' folder for 'apo-cbl.pdf' */}
                <iframe
                  src="bylaws/apo-cbl.pdf"
                  title="APOGC USA Constitution and By-Laws"
                  style={styles.iframe}
                />
              </div>
            </Card>
          </div>

          {/* === RIGHT COLUMN: QUICK POLICIES & LINKS === */}
          <div style={styles.rightColumn}>
            {/* Quick Summary Card: Policies & Procedures */}
            <Card>
              <CardContent>
                <div style={sidebarStyles.header}>
                  <FileText size={22} color="#ffd700" />
                  <h2 style={sidebarStyles.title}>Club Policies</h2>
                </div>
                <p style={sidebarStyles.text}>
                  Quick reference guide for day-to-day club operations.
                </p>

                <div style={sidebarStyles.timeline}>
                  {/* Membership Dues */}
                  <div style={sidebarStyles.timelineItem}>
                    <DollarSign
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>Membership & Dues</h4>
                      <p style={sidebarStyles.stepText}>
                        Annual dues are <b>$50</b> [cite: 161]. Members are
                        required to play <b>at least 2</b> tournaments a year
                        [cite: 122, 165]. Memberships expire annually on{" "}
                        <b>December 31st</b>
                        [cite: 125].
                      </p>
                    </div>
                  </div>

                  {/* Monthly Tournaments */}
                  <div style={sidebarStyles.timelineItem}>
                    <CalendarDays
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>
                        Monthly Tournaments
                      </h4>
                      <p style={sidebarStyles.stepText}>
                        Hosted in monthly rotation by regional groups (North,
                        East, West, South) [cite: 169].{" "}
                        <b>Tournament fees must be Zelled 1 week prior </b>
                        [cite: 175]. No cancellations allowed after the 1-week
                        deadline, but substitutions are okay[cite: 176, 178].
                      </p>
                    </div>
                  </div>

                  {/* Awards */}
                  <div style={sidebarStyles.timelineItem}>
                    <Trophy
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>
                        End of Year Awards
                      </h4>
                      <p style={sidebarStyles.stepText}>
                        The <strong>FedEx / Librado Ureta Trophy</strong> is
                        awarded to the player with the most points, and the{" "}
                        <strong>Player of the Year</strong> goes to the member
                        with the most monthly championships [cite: 184].
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Policies PDF Button */}
                <div style={{ marginTop: "2rem" }}>
                  <Button
                    label={
                      <span style={styles.iconButtonText}>
                        <ExternalLink size={16} style={{ marginRight: 6 }} />
                        Read Full Policies & Procedures
                      </span>
                    }
                    onClick={() => openPdfInNewTab("bylaws/apo-policies.pdf")}
                    fullWidth
                    variant="primary"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Code of Conduct Teaser / Info Box */}
            <div style={styles.rulesBox}>
              <h3
                style={{
                  ...sidebarStyles.title,
                  color: "#002b7f",
                  marginBottom: "0.5rem",
                }}
              >
                Club Communication
              </h3>
              <p style={styles.rulesText}>
                Active members are included in the official APOGC Viber group
                [cite: 163]. Please note that political and religious postings
                are strictly prohibited [cite: 185].
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Reuse the exact same robust styles from the Service page
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
        url('https://plus.unsplash.com/premium_photo-1679713921306-9cdf45780ead?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvbGZ8ZW58MHwwfDB8fHww')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "4rem 1rem",
    textAlign: "left",
  },
  headerInner: {
    maxWidth: "1200px",
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 1rem",
  },

  // Layout Styles
  twoColumnWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    alignItems: "flex-start",
  },
  leftColumn: {
    flex: "1 1 65%",
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
  },
  rightColumn: {
    paddingTop: "40px",
    flex: "1 1 30%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  // PDF Viewer Styles
  pdfHeader: {
    padding: "1.5rem",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Pushes title to left, button to right
    flexWrap: "wrap",
    gap: "1rem",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  pdfTitleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  pdfTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#002b7f",
    margin: 0,
  },
  iconButtonText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pdfContainer: {
    width: "100%",
    height: "800px",
    backgroundColor: "#f3f4f6",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },

  // Teaser Box
  rulesBox: {
    backgroundColor: "#e0ecff",
    borderRadius: "12px",
    padding: "1.5rem",
    border: "1px solid #b6d0ff",
  },
  rulesText: {
    fontSize: "0.95rem",
    color: "#333",
    lineHeight: "1.6",
    margin: 0,
  },
};

const sidebarStyles = {
  header: {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#002b7f",
    margin: 0,
  },
  text: {
    color: "#4b5563",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    marginBottom: "1.5rem",
  },

  // Timeline Styles
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "1.5rem",
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.8rem",
  },
  timelineIcon: {
    marginTop: "0.2rem",
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#111",
    marginBottom: "0.3rem",
    marginTop: 0,
  },
  stepText: {
    fontSize: "0.9rem",
    color: "#444",
    lineHeight: "1.5",
    margin: 0,
  },
};
