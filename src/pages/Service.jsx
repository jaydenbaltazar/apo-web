import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileDown,
  Info,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";

export default function ServicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 style={styles.headerTitle}>Service & Charitable Giving</h1>
          <p style={styles.headerSubtitle}>
            Fellowship, Leadership, and Service through Golf
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
                <HeartHandshake size={24} color="#002b7f" />
                <h2 style={styles.pdfTitle}>
                  Charitable Giving Process Policy
                </h2>
              </div>
              <div style={styles.pdfContainer}>
                {/* This iframe looks inside your 'public' folder. 
                  Make sure you have a file named 'policy.pdf' there! 
                */}
                <iframe
                  src="charity/policy.pdf"
                  title="APO Golf Club USA Charitable Giving Process"
                  style={styles.iframe}
                />
              </div>
            </Card>
          </div>

          {/* === RIGHT COLUMN: DOWNLOADS & INFO === */}
          <div style={styles.rightColumn}>
            {/* Downloads Card */}
            <Card>
              <CardContent>
                <div style={sidebarStyles.header}>
                  <FileDown size={22} color="#ffd700" />
                  <h2 style={sidebarStyles.title}>Forms & Documents</h2>
                </div>

                <p style={sidebarStyles.text}>
                  Download the official forms to participate in our giving
                  cycle.
                </p>

                <div style={sidebarStyles.buttonGroup}>
                  {/* Using standard anchor tags for downloading files from the public folder */}
                  <a
                    href="charity/nomination-form.pdf"
                    download
                    style={sidebarStyles.downloadLink}
                  >
                    <Button
                      label="Download Nomination Form"
                      fullWidth
                      variant="primary"
                    />
                  </a>

                  <a
                    href="charity/voting-form.pdf"
                    download
                    style={sidebarStyles.downloadLink}
                  >
                    <Button
                      label="Download Voting Form"
                      fullWidth
                      variant="outline"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Summary Card */}
            <Card>
              <CardContent>
                <div style={sidebarStyles.header}>
                  <Info size={22} color="#ffd700" />
                  <h2 style={sidebarStyles.title}>Cycle Overview</h2>
                </div>

                <p style={sidebarStyles.text}>
                  This process is designed to be inclusive, transparent, and
                  member-driven.
                </p>

                <div style={sidebarStyles.timeline}>
                  <div style={sidebarStyles.timelineItem}>
                    <CheckCircle2
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>1. Nominate</h4>
                      <p style={sidebarStyles.stepText}>
                        Submit one charity per cycle during the 7-10 day window.
                      </p>
                    </div>
                  </div>

                  <div style={sidebarStyles.timelineItem}>
                    <CheckCircle2
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>2. Shortlist</h4>
                      <p style={sidebarStyles.stepText}>
                        Officers screen for eligibility and select 5-8
                        charities.
                      </p>
                    </div>
                  </div>

                  <div style={sidebarStyles.timelineItem}>
                    <CheckCircle2
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>3. Vote</h4>
                      <p style={sidebarStyles.stepText}>
                        Members allocate "club dollars" or use ranked-choice
                        voting.
                      </p>
                    </div>
                  </div>

                  <div style={sidebarStyles.timelineItem}>
                    <CheckCircle2
                      size={18}
                      color="#002b7f"
                      style={sidebarStyles.timelineIcon}
                    />
                    <div>
                      <h4 style={sidebarStyles.stepTitle}>4. Impact</h4>
                      <p style={sidebarStyles.stepText}>
                        Funds are distributed based on aggregated results.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Balikbayan Box Teaser */}
            <div style={styles.rulesBox}>
              <h3
                style={{
                  ...sidebarStyles.title,
                  color: "#002b7f",
                  marginBottom: "0.5rem",
                }}
              >
                Balikbayan Box Project
              </h3>
              <p style={styles.rulesText}>
                Stay tuned for our upcoming interactive project where we
                organize, design, and fill our community Balikbayan boxes to
                send support where it's needed most.
              </p>
            </div>
          </div>
        </div>
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
        url('https://images.unsplash.com/photo-1561251224-e393160cd769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvbGZ8ZW58MHwwfDB8fHww')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "4rem 1rem",
    textAlign: "left",
  },
  headerInner: {
    maxWidth: "1200px", // slightly wider to accommodate the two columns nicely
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
    alignItems: "flex-start", // Prevents columns from stretching to match each other's height if not desired
  },
  leftColumn: {
    flex: "1 1 65%", // Takes up 65% of the space
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
  },
  rightColumn: {
    flex: "1 1 30%", // Takes up the remaining space
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
    gap: "0.8rem",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  pdfTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#002b7f",
    margin: 0,
  },
  pdfContainer: {
    width: "100%",
    height: "800px", // Tall enough to read comfortably
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
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#002b7f",
  },
  text: {
    color: "#4b5563",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    marginBottom: "1.5rem",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  downloadLink: {
    textDecoration: "none", // Removes the blue underline from the <a> tag
    width: "100%",
  },

  // Timeline Styles
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
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
    fontSize: "1rem",
    fontWeight: "700",
    color: "#111",
    marginBottom: "0.2rem",
  },
  stepText: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.4",
  },
};
