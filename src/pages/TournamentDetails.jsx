import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Trophy,
  Hotel,
  Award,
} from "lucide-react";
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";
import { tournamentsData } from "../data/tournamentInfo";

export default function TournamentDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const tournament = tournamentsData.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tournament) {
    return (
      <div style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <h2>Tournament not found.</h2>
        <Button
          onClick={() => navigate("/tournaments")}
          label="Back to Tournaments"
        />
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tournament) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        Tournament not found.
      </div>
    );
  }

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
          <h1 style={styles.headerTitle}>{tournament.title}</h1>
          <p style={styles.headerSubtitle}>
            {tournament.venue} • {tournament.location}
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* === WINNERS CARD (Only renders if winners exist) === */}
        {tournament.winners && (
          <Card>
            <CardContent>
              <div style={winnersStyles.header}>
                <div style={winnersStyles.iconCircle}>
                  <Trophy size={22} color="#ffd700" />
                </div>
                <h2 style={winnersStyles.title}>Winners</h2>
              </div>

              <div style={winnersStyles.gridTwo}>
                <div style={winnersStyles.column}>
                  {tournament.winners.classA && (
                    <div style={winnersStyles.section}>
                      <h3 style={winnersStyles.subTitle}>Class A</h3>
                      <p style={winnersStyles.label}>
                        Champion:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classA.champ}
                        </span>
                      </p>
                      <p style={winnersStyles.label}>
                        Runner Up:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classA.runnerUp}
                        </span>
                      </p>
                    </div>
                  )}

                  {tournament.winners.classB && (
                    <div style={winnersStyles.section}>
                      <h3 style={winnersStyles.subTitle}>Class B</h3>
                      <p style={winnersStyles.label}>
                        Champion:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classB.champ}
                        </span>
                      </p>
                      <p style={winnersStyles.label}>
                        Runner Up:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classB.runnerUp}
                        </span>
                      </p>
                    </div>
                  )}

                  {tournament.winners.classC && (
                    <div style={winnersStyles.section}>
                      <h3 style={winnersStyles.subTitle}>Class C</h3>
                      <p style={winnersStyles.label}>
                        Champion:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classC.champ}
                        </span>
                      </p>
                      <p style={winnersStyles.label}>
                        Runner Up:{" "}
                        <span style={winnersStyles.value}>
                          {tournament.winners.classC.runnerUp}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                <div style={winnersStyles.column}>
                  {tournament.winners.overall && (
                    <div style={winnersStyles.section}>
                      <h3 style={winnersStyles.subTitle}>
                        Overall Low Net Champion
                      </h3>
                      <p style={winnersStyles.value}>
                        {tournament.winners.overall}
                      </p>
                    </div>
                  )}

                  {tournament.winners.closestToPin &&
                    tournament.winners.closestToPin.length > 0 && (
                      <div style={winnersStyles.section}>
                        <h3 style={winnersStyles.subTitle}>
                          Closest to the Pin
                        </h3>
                        {tournament.winners.closestToPin.map((pin, idx) => (
                          <p key={idx} style={winnersStyles.label}>
                            {pin.hole}:{" "}
                            <span style={winnersStyles.value}>
                              {pin.winner}
                            </span>
                          </p>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* === COURSE INFORMATION CARD === */}
        <Card>
          <CardContent>
            <div style={courseStyles.header}>
              <div style={courseStyles.iconCircle}>
                <MapPin size={22} color="#ffd700" />
              </div>
              <h2 style={courseStyles.title}>Course Information</h2>
            </div>

            <div style={courseStyles.grid}>
              <div style={courseStyles.column}>
                <h3 style={courseStyles.subTitle}>{tournament.venue}</h3>
                <p style={{ ...courseStyles.subText, whiteSpace: "pre-line" }}>
                  {tournament.courseInfo?.address || "Address TBD"}
                </p>

                <div style={courseStyles.infoList}>
                  <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>Par:</span>
                    <span style={courseStyles.value}>
                      {tournament.courseInfo?.par || "TBD"}
                    </span>
                  </div>
                  <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>White Tees:</span>
                    <span style={courseStyles.value}>
                      {tournament.courseInfo?.whiteTees || "TBD"}
                    </span>
                  </div>
                  <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>Red Tees:</span>
                    <span style={courseStyles.value}>
                      {tournament.courseInfo?.redTees || "TBD"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Only render accommodations if the data exists */}
              {tournament.accommodations && (
                <div style={courseStyles.column}>
                  <h3 style={courseStyles.accomTitle}>
                    <Hotel
                      size={18}
                      color="#002b7f"
                      style={{ marginRight: 6 }}
                    />
                    Accommodations
                  </h3>
                  <p style={courseStyles.text}>
                    {tournament.accommodations.name}
                  </p>
                  <p
                    style={{ ...courseStyles.subText, whiteSpace: "pre-line" }}
                  >
                    {tournament.accommodations.address}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* === EVENT SCHEDULE === */}
        {tournament.schedule && tournament.schedule.length > 0 && (
          <Card>
            <CardContent>
              <div style={styles.sectionHeader}>
                <div style={styles.iconCircleBlue}>
                  <Calendar size={24} color="#ffd700" />
                </div>
                <h2 style={styles.sectionTitle}>Event Schedule</h2>
              </div>

              {/* NEW TIMELINE DESIGN */}
              <div style={styles.timelineContainer}>
                {tournament.schedule.map((item, idx) => (
                  <div key={idx} style={styles.timelineItem}>
                    {/* Left side: Node and Line */}
                    <div style={styles.timelineNode}>
                      <div style={styles.timelineDot}>{idx + 1}</div>
                      {/* Don't draw the line after the very last item */}
                      {idx !== tournament.schedule.length - 1 && (
                        <div style={styles.timelineLine}></div>
                      )}
                    </div>

                    {/* Right side: Content */}
                    <div style={styles.timelineContent}>
                      <p style={styles.timelineText}>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* === CLOSEST TO THE PIN (Course Details) === */}
        {tournament.closestToPinHoles &&
          tournament.closestToPinHoles.length > 0 && (
            <Card>
              <CardContent>
                <div style={styles.sectionHeader}>
                  <div style={styles.iconCircleBlue}>
                    <Award size={24} color="#ffd700" />
                  </div>
                  <h2 style={styles.sectionTitle}>Closest to the Pin</h2>
                </div>

                <div style={courseStyles.grid}>
                  {tournament.closestToPinHoles.map((holeInfo, idx) => (
                    <div key={idx} style={courseStyles.column}>
                      <h3 style={styles.subTitle}>{holeInfo.hole}</h3>
                      <div style={styles.infoList}>
                        <div style={styles.infoRow}>
                          <span style={styles.infoLabel}>White:</span>
                          <span style={styles.infoValue}>{holeInfo.white}</span>
                        </div>
                        <div style={styles.infoRow}>
                          <span style={styles.infoLabel}>Red: </span>
                          <span style={styles.infoValue}>{holeInfo.red}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={styles.rulesBox}>
                  <p style={styles.rulesText}>
                    <strong>Rules:</strong> Closest-to-the-pin is won by the
                    golfer whose tee shot comes to rest closest to the hole. To
                    win, the ball must have stopped on the green. Any balls off
                    the green are ignored, even if they are the closest.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

        {/* === PLAYERS TABLE === */}
        {tournament.players && tournament.players.length > 0 && (
          <Card>
            <CardContent>
              <div style={styles.sectionHeader}>
                <div style={styles.iconCircleBlue}>
                  <Trophy size={24} color="#ffd700" />
                </div>
                <h2 style={styles.sectionTitle}>Players</h2>
              </div>

              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead>
                    <tr style={styles.tableHeadRow}>
                      <th style={styles.tableHeader}>Flight</th>
                      <th style={styles.tableHeader}>Time</th>
                      <th style={styles.tableHeader}>Players</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournament.players.map((player, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: idx % 2 === 0 ? "#f9fafb" : "#fff",
                        }}
                      >
                        <td style={styles.flightCell}>{player.flight}</td>
                        <td style={styles.timeCell}>{player.time}</td>
                        <td style={styles.playersCell}>
                          {player.names.map((name, nIdx) => (
                            <div key={nIdx} style={styles.playerName}>
                              {name}
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
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
        rgba(0, 43, 127, 0.6),
        rgba(0, 43, 127, 0.6)
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
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    color: "#002b7f",
  },
  iconCircleBlue: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#002b7f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleGold: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#ffd700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridTwo: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  gridThree: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "stretch",
  },
  subTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#002b7f",
    marginBottom: "0.5rem",
  },
  text: {
    color: "#444",
    marginBottom: "0.5rem",
    lineHeight: "1.5",
  },
  subText: {
    color: "#666",
    fontSize: "0.9rem",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  infoLabel: {
    marginRight: "1rem",
    color: "#666",
  },
  infoValue: {
    color: "#002b7f",
    fontWeight: "600",
  },
  // --- NEW TIMELINE STYLES ---
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    paddingLeft: "0.5rem",
  },
  timelineItem: {
    display: "flex",
    minHeight: "60px", // Gives vertical space for the connecting line
  },
  timelineNode: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "1.5rem",
  },
  timelineDot: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#f8fafc", // Very light background
    border: "2px solid #002b7f", // Blue border
    color: "#002b7f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9rem",
    fontWeight: "bold",
    zIndex: 1, // Keeps the dot above the line
  },
  timelineLine: {
    flex: 1, // Stretches to fill the remaining vertical space
    width: "2px",
    backgroundColor: "#e2e8f0", // Light gray line
    marginTop: "4px",
    marginBottom: "4px",
  },
  timelineContent: {
    paddingBottom: "2rem", // Spacing below the text
    paddingTop: "5px", // Aligns the text perfectly with the dot
  },
  timelineText: {
    fontSize: "1.1rem",
    color: "#1f2937",
    fontWeight: "600",
    margin: 0,
    lineHeight: "1.4",
  },
  rulesBox: {
    backgroundColor: "#e0ecff",
    borderRadius: "8px",
    padding: "1rem",
    border: "1px solid #b6d0ff",
    marginTop: "1rem",
  },
  rulesText: {
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: "1.5",
  },
  mapPlaceholder: {
    marginTop: "1.5rem",
    height: "250px",
    background: "linear-gradient(to bottom right, #22c55e, #047857)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  mapText: {
    marginTop: "0.5rem",
    fontWeight: "600",
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "8px",
    marginTop: "1rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeadRow: {
    backgroundColor: "#002b7f",
    color: "white",
  },
  tableHeader: {
    padding: "1rem",
    textAlign: "left",
    fontWeight: "600",
  },
  flightCell: {
    padding: "1rem",
    fontWeight: "600",
    color: "#002b7f",
  },
  timeCell: {
    padding: "1rem",
    color: "#333",
  },
  playersCell: {
    padding: "1rem",
  },
  playerName: {
    color: "#333",
    lineHeight: "1.4",
  },
};

const courseStyles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
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
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
  },
  column: {
    flex: "1 1 45%",
    minWidth: "280px",
  },
  subTitle: {
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#002b7f",
    marginBottom: "0.5rem",
  },
  accomTitle: {
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#002b7f",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "#1f2937",
    marginBottom: "0.5rem",
    lineHeight: "1.6",
  },
  subText: {
    color: "#6b7280",
    fontSize: "0.9rem",
    lineHeight: "1.4",
  },
  infoList: {
    marginTop: "0.6rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    color: "#111827",
    fontSize: "0.95rem",
  },
  label: {
    color: "#6b7280",
  },
  value: {
    fontWeight: "600",
    color: "#111827",
  },
};

const winnersStyles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "2rem",
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
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#002b7f",
  },
  gridTwo: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
  },
  column: {
    flex: "1 1 48%",
    minWidth: "340px",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  section: {
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "150px",
    boxSizing: "border-box",
    maxWidth: "85%",
  },
  subTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#002b7f",
    marginBottom: "0.4rem",
  },
  label: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.5",
  },
  value: {
    fontWeight: "600",
    color: "#111",
  },
};
