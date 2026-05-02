import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  History,
  Users,
  Trophy,
  Flag,
  CalendarDays,
  Award,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";

export default function ApoHistory() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const presidents = [
    {
      name: "Lope Cristobal",
      term: "2010 - 2014",
      note: "First President and Club Champion of 2010. Organized the first official tournament at Rancho Park in July 2010.",
    },
    {
      name: "Tony Ladrillono",
      term: "2015 - 2016",
      note: "Served as the second president for one term.",
    },
    {
      name: "Rene Paragas",
      term: "2017 - 2018",
      note: "Served as the third president.",
    },
    {
      name: "Manny Oteyza",
      term: "2019 - 2022",
      note: "During his term, the prestigious Librado Ureta Trophy was born.",
    },
    {
      name: "Ramon Cuenca",
      term: "2023 - 2024",
      note: "Took over leadership and guided the club into its current era.",
    },
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
          <h1 style={styles.headerTitle}>Club History</h1>
          <p style={styles.headerSubtitle}>
            Promoting friendship and fellowship through golf since 2010.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Two Column Layout Wrapper */}
        <div style={styles.twoColumnWrapper}>
          {/* === LEFT COLUMN: MAIN NARRATIVE === */}
          <div style={styles.leftColumn}>
            <Card>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <History size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Our Origins</h2>
                </div>

                <p style={courseStyles.text}>
                  As the name implies, Alpha Phi Omega Golf Club USA (APOGC USA)
                  is a golf club consisting of brothers and sisters from the
                  Alpha Phi Omega fraternity. It is primarily an informal
                  organization designed to promote friendship and fellowship
                  through the game of golf.
                </p>
                <p style={courseStyles.text}>
                  The club was officially organized in <strong>May 2010</strong>{" "}
                  by a small group of golf-playing brothers. Shortly after, the
                  very first official tournament was held in{" "}
                  <strong>July 2010</strong> at Rancho Park.
                </p>

                {/* Quick Stats Grid */}
                <div style={styles.statsGrid}>
                  <div style={styles.statBox}>
                    <Users
                      size={24}
                      color="#002b7f"
                      style={{ marginBottom: "0.5rem" }}
                    />
                    <h3 style={styles.statNumber}>100+</h3>
                    <p style={styles.statLabel}>Active Members</p>
                    <p style={styles.statSub}>
                      Grown from just ~20 original members
                    </p>
                  </div>
                  <div style={styles.statBox}>
                    <CalendarDays
                      size={24}
                      color="#002b7f"
                      style={{ marginBottom: "0.5rem" }}
                    />
                    <h3 style={styles.statNumber}>2010</h3>
                    <p style={styles.statLabel}>Year Founded</p>
                    <p style={styles.statSub}>
                      First tournament at Rancho Park
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ marginTop: "2rem" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <Trophy size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Milestones & Rivalries</h2>
                </div>

                <div style={courseStyles.infoList}>
                  <div style={courseStyles.infoRow}>
                    <span style={courseStyles.value}>
                      <Flag
                        size={16}
                        style={{ marginRight: 8, display: "inline" }}
                      />
                      The Beta Sigma Rivalry (2018 - Present)
                    </span>
                    <span
                      style={{ ...courseStyles.label, marginTop: "0.5rem" }}
                    >
                      The first inter-fraternity tournament was held in 2018
                      against the Beta Sigma fraternity. APOGC USA successfully
                      defended the crown for five consecutive years until 2023,
                      when the Beta Sigmans claimed the championship.
                    </span>
                  </div>

                  <div style={{ ...courseStyles.infoRow, marginTop: "1.5rem" }}>
                    <span style={courseStyles.value}>
                      <Award
                        size={16}
                        style={{ marginRight: 8, display: "inline" }}
                      />
                      The Librado Ureta Trophy
                    </span>
                    <span
                      style={{ ...courseStyles.label, marginTop: "0.5rem" }}
                    >
                      Introduced during Manny Oteyza's term (2019-2022), this
                      prestigious trophy is awarded annually to recognize
                      excellence and dedication on the course.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* === RIGHT COLUMN: TIMELINE === */}
          <div style={styles.rightColumn}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <Users size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Presidential Timeline</h2>
                </div>

                <div style={timelineStyles.container}>
                  {presidents.map((president, idx) => (
                    <div key={idx} style={timelineStyles.item}>
                      {/* Node & Line */}
                      <div style={timelineStyles.node}>
                        <div style={timelineStyles.dot}></div>
                        {idx !== presidents.length - 1 && (
                          <div style={timelineStyles.line}></div>
                        )}
                      </div>

                      {/* Content */}
                      <div style={timelineStyles.content}>
                        <h4 style={timelineStyles.term}>{president.term}</h4>
                        <h3 style={timelineStyles.name}>{president.name}</h3>
                        <p style={timelineStyles.note}>{president.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
        url('https://images.unsplash.com/photo-1742498626135-67a7d3501eff?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000')
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
    marginTop: "2rem",
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
  twoColumnWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    alignItems: "stretch", // Allows the timeline card to stretch to match the left column
  },
  leftColumn: {
    flex: "1 1 60%",
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
  },
  rightColumn: {
    flex: "1 1 35%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
  },

  // Stats Grid
  statsGrid: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
  statBox: {
    flex: "1 1 200px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#002b7f",
    margin: 0,
  },
  statLabel: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
    margin: "0.2rem 0",
  },
  statSub: {
    fontSize: "0.85rem",
    color: "#666",
    margin: 0,
  },
};

const courseStyles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1.5rem",
    paddingTop: "2rem",
  },
  iconCircle: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: "#002b7f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#002b7f",
    margin: 0,
  },
  text: {
    color: "#1f2937",
    marginBottom: "1rem",
    lineHeight: "1.6",
    fontSize: "1.05rem",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
  },
  infoRow: {
    display: "flex",
    flexDirection: "column",
  },
  value: {
    fontWeight: "700",
    color: "#002b7f",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
  },
  label: {
    color: "#4b5563",
    lineHeight: "1.6",
    fontSize: "1rem",
  },
};

const timelineStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1.5rem",
    paddingLeft: "0.5rem",
  },
  item: {
    display: "flex",
    minHeight: "80px",
  },
  node: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "1.5rem",
  },
  dot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#ffd700",
    border: "3px solid #002b7f",
    zIndex: 1,
    marginTop: "4px",
  },
  line: {
    flex: 1,
    width: "2px",
    backgroundColor: "#e2e8f0",
    marginTop: "4px",
    marginBottom: "4px",
  },
  content: {
    paddingBottom: "2rem",
  },
  term: {
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "600",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  name: {
    fontSize: "1.2rem",
    color: "#002b7f",
    fontWeight: "700",
    margin: "0.2rem 0 0.4rem 0",
  },
  note: {
    fontSize: "0.95rem",
    color: "#4b5563",
    margin: 0,
    lineHeight: "1.5",
  },
};
