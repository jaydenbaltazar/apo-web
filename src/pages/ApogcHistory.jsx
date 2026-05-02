import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  History,
  Users,
  ShieldCheck,
  MapPin,
  Beer,
  Award,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";

export default function ApogcHistory() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const foundingOfficers = [
    { role: "President", name: "Angel Pangilinan" },
    { role: "Tournament Director", name: "PJ Aclan" },
    { role: "Handicap Chairman", name: "Mike Melendez" },
    {
      role: "Treasurer",
      name: "Bobet Lara",
      note: "Later succeeded by Boy Medina",
    },
    {
      role: "Secretary",
      name: "Sis Melody",
      note: "Later succeeded by Rocky Marte",
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
            The official founding and evolution of APOGC USA.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Two Column Layout Wrapper */}
        <div style={styles.twoColumnWrapper}>
          {/* === LEFT COLUMN: THE NARRATIVE === */}
          <div style={styles.leftColumn}>
            {/* The Spark */}
            <Card>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <History size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>The Spark: October 2020</h2>
                </div>

                <p style={courseStyles.text}>
                  The official formation of the club began shortly after the
                  peak of COVID-19. Brod Angel Pangilinan, recovering from his
                  second back surgery, invited several APO Golfer brothers and
                  Sis Melody to celebrate his birthday with a round of golf at{" "}
                  <strong>Glen Ivy Golf Course in Corona</strong>.
                </p>

                <div style={styles.quoteBox}>
                  <Beer
                    size={24}
                    color="#002b7f"
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <p style={styles.quoteText}>
                    "During the post-game fellowship at my home, after a few
                    beers and shots of a 25-year-old smokey single malt (that
                    some said tasted like formalin, but we finished anyway!),
                    Bro Bobet Lara and others urged:{" "}
                    <strong>
                      'Why don’t we form a Golf Club exclusive to APO?'
                    </strong>
                    "
                  </p>
                  <p style={styles.quoteAuthor}>— Brod Angel Pangilinan</p>
                </div>

                <p style={courseStyles.text}>
                  Everyone cheered, pushing for this group of "APO Golfers &
                  Gulpers" to get officially organized. From that impromptu
                  birthday gathering, the modern iteration of{" "}
                  <strong>Alpha Phi Omega Golf Club, USA</strong> was born.
                </p>
              </CardContent>
            </Card>

            {/* Growth & Fellowship */}
            <Card style={{ marginTop: "2rem" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <MapPin size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Growth & Camaraderie</h2>
                </div>

                <p style={courseStyles.text}>
                  The club quickly became a hit for APO golfers across all
                  regions of Southern California, regardless of their alumni
                  affiliation. Word of mouth spread to San Diego, South Bay,
                  East Bay, and the North.
                </p>
                <p style={courseStyles.text}>
                  Monthly games began drawing 32 to 40 golfers regularly. Simple
                  fundraising efforts were established—from selling club shirts
                  to utilizing SCGA/GHIN membership kickbacks. But the true
                  heart of the club remained the post-game fellowship. Brothers
                  like Oca Atienza, Tony Gomez, PJ Aclan, and Gene Libed
                  regularly opened their homes to host, and on many occasions,
                  the golf course parking lot itself served as the venue for
                  breakfast and post-game celebrations.
                </p>

                <div style={{ ...courseStyles.infoList, marginTop: "1.5rem" }}>
                  <div style={courseStyles.infoRow}>
                    <span style={courseStyles.value}>
                      <Award
                        size={16}
                        style={{ marginRight: 8, display: "inline" }}
                      />
                      Passing the Torch
                    </span>
                    <span
                      style={{ ...courseStyles.label, marginTop: "0.5rem" }}
                    >
                      After three successful years of foundational leadership
                      under Angel Pangilinan, the presidency was passed to Bro
                      Ruel Umandal and his Executive Officers, ushering the club
                      into its next highly organized and competitive era.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* === RIGHT COLUMN: DATA & OFFICERS === */}
          <div style={styles.rightColumn}>
            {/* SCGA Registration Card */}
            <Card>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <ShieldCheck size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>SCGA Registration</h2>
                </div>

                <p style={courseStyles.text}>
                  Following the founding meeting, the requirements were
                  submitted to the Southern California Golf Association (SCGA)
                  to become an officially sanctioned organization.
                </p>

                <div style={styles.registryBox}>
                  <p style={styles.registryLabel}>Official Registered Name:</p>
                  <h3 style={styles.registryValue}>ΑΦΩ GOLF CLUB, USA</h3>
                  <div style={styles.divider}></div>
                  <p style={styles.registryLabel}>SCGA Club Number:</p>
                  <h3 style={styles.registryValue}># 54114</h3>
                </div>
              </CardContent>
            </Card>

            {/* Founding Officers Card */}
            <Card style={{ marginTop: "2rem" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <Users size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Founding Officers</h2>
                </div>

                <div style={timelineStyles.container}>
                  {foundingOfficers.map((officer, idx) => (
                    <div key={idx} style={timelineStyles.item}>
                      <div style={timelineStyles.node}>
                        <div style={timelineStyles.dot}></div>
                        {idx !== foundingOfficers.length - 1 && (
                          <div style={timelineStyles.line}></div>
                        )}
                      </div>

                      <div style={timelineStyles.content}>
                        <h4 style={timelineStyles.term}>{officer.role}</h4>
                        <h3 style={timelineStyles.name}>{officer.name}</h3>
                        {officer.note && (
                          <p style={timelineStyles.note}>{officer.note}</p>
                        )}
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
        url('https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZiUyMGNvdXJzZXxlbnwwfDB8MHx8fDA%3D')
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
  twoColumnWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    alignItems: "flex-start",
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

  // Narrative Specific Styles
  quoteBox: {
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #002b7f",
    padding: "1.5rem",
    margin: "1.5rem 0",
    borderRadius: "0 8px 8px 0",
  },
  quoteText: {
    fontSize: "1.1rem",
    color: "#1f2937",
    lineHeight: "1.6",
    fontStyle: "italic",
    margin: 0,
  },
  quoteAuthor: {
    fontSize: "0.95rem",
    color: "#6b7280",
    fontWeight: "600",
    marginTop: "0.8rem",
    textAlign: "right",
  },

  // Registry Box
  registryBox: {
    backgroundColor: "#e0ecff",
    border: "1px solid #b6d0ff",
    borderRadius: "8px",
    padding: "1.5rem",
    marginTop: "1rem",
    textAlign: "center",
  },
  registryLabel: {
    fontSize: "0.9rem",
    color: "#4b5563",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 0.2rem 0",
  },
  registryValue: {
    fontSize: "1.5rem",
    color: "#002b7f",
    fontWeight: "bold",
    margin: 0,
  },
  divider: {
    height: "1px",
    backgroundColor: "#b6d0ff",
    margin: "1.2rem 0",
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
    color: "#374151",
    marginBottom: "1rem",
    lineHeight: "1.7",
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
    minHeight: "70px",
  },
  node: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "1.5rem",
  },
  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "#ffd700",
    border: "2px solid #002b7f",
    zIndex: 1,
    marginTop: "6px",
  },
  line: {
    flex: 1,
    width: "2px",
    backgroundColor: "#e2e8f0",
    marginTop: "4px",
    marginBottom: "4px",
  },
  content: {
    paddingBottom: "1.5rem",
  },
  term: {
    fontSize: "0.85rem",
    color: "#6b7280",
    fontWeight: "600",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  name: {
    fontSize: "1.1rem",
    color: "#111827",
    fontWeight: "700",
    margin: "0.2rem 0 0.2rem 0",
  },
  note: {
    fontSize: "0.9rem",
    color: "#4b5563",
    margin: 0,
    lineHeight: "1.4",
  },
};
