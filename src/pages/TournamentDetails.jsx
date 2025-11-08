import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Trophy,
  Hotel,
  Award,
} from "lucide-react";
import Card from "../../components/tourney/Card"
import CardContent from "../../components/tourney/CardContent"
import Button from "../../components/global/Button";

const players = [
  {
    flight: 1,
    time: "9:50",
    names: ["Jay Baltazar", "Ed Mendoza", "Roland Paras", "Doc Rolly Franco"],
  },
  {
    flight: 2,
    time: "10:00",
    names: ["Sancho Sy", "Lope Cristobal", "Nards Castillo", "Bobet Peneza"],
  },
  {
    flight: 3,
    time: "10:10",
    names: ["Rocky Marte", "Manny Figuerres", "Pastor Dennis Casaje", "Nemie Mosequera"],
  },
  {
    flight: 4,
    time: "10:20",
    names: ["Oca Atienza", "Jimmy Magsino", "PJ Aclan", "Sonny Martinez"],
  },
  {
    flight: 5,
    time: "10:30",
    names: ["Raul Medina", "Raul Sambitan", "Angel Pangilinan", "Mike Melendez"],
  },
  {
    flight: 6,
    time: "10:40",
    names: ["Doc Eric Serrano", "Boy Medina", "Paco Franco", "Stephen Castro"],
  },
  {
    flight: 7,
    time: "10:50",
    names: ["Pris Tanglao", "Kaye Sumicad", "Flor Mendoza"],
  },
  {
    flight: 8,
    time: "11:00",
    names: ["Bobet Lara", "Beeboy Mansilla"],
  },
];

export default function TournamentDetails() {
  const navigate = useNavigate();

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
          <h1 style={styles.headerTitle}>November 2025 Tournament</h1>
          <p style={styles.headerSubtitle}>
            Sterling Hills Golf Club • Camarillo, CA
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* === WINNERS CARD === */}
        <Card>
        <CardContent>
            <div style={winnersStyles.header}>
            <div style={winnersStyles.iconCircle}>
                <Trophy size={22} color="#ffd700" />
            </div>
            <h2 style={winnersStyles.title}>Winners</h2>
            </div>

            {/* Two-column container */}
            <div style={winnersStyles.gridTwo}>
            {/* ===== Left Column (Class A–C) ===== */}
            <div style={winnersStyles.column}>
                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Class A</h3>
                <p style={winnersStyles.label}>
                    Champion: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                <p style={winnersStyles.label}>
                    Runner Up: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                </div>

                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Class B</h3>
                <p style={winnersStyles.label}>
                    Champion: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                <p style={winnersStyles.label}>
                    Runner Up: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                </div>

                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Class C</h3>
                <p style={winnersStyles.label}>
                    Champion: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                <p style={winnersStyles.label}>
                    Runner Up: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                </div>
            </div>

            {/* ===== Right Column (Other Winners) ===== */}
            <div style={winnersStyles.column}>
                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Overall Low Net Champion</h3>
                <p style={winnersStyles.value}>&lt;Name&gt;</p>
                </div>

                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Guest Champion</h3>
                <p style={winnersStyles.value}>&lt;Name&gt;</p>
                </div>

                <div style={winnersStyles.section}>
                <h3 style={winnersStyles.subTitle}>Closest to the Pin</h3>
                <p style={winnersStyles.label}>
                    Hole #8: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                <p style={winnersStyles.label}>
                    Hole #15: <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                <p style={winnersStyles.label}>
                    Hole #11 (Sponsored by Doc Rolly Franco): 
                    <span style={winnersStyles.value}>&lt;Name&gt;</span>
                </p>
                </div>
            </div>
            </div>
        </CardContent>
        </Card>

        {/* === COURSE INFORMATION CARD === */}
        <Card>
        <CardContent>
            {/* Header */}
            <div style={courseStyles.header}>
            <div style={courseStyles.iconCircle}>
                <MapPin size={22} color="#ffd700" />
            </div>
            <h2 style={courseStyles.title}>Course Information</h2>
            </div>

            {/* Two Columns */}
            <div style={courseStyles.grid}>
            {/* Left Column */}
            <div style={courseStyles.column}>
                <h3 style={courseStyles.subTitle}>Sterling Hills Golf Club</h3>
                <p style={courseStyles.text}>
                901 Sterling Hills Drive <br />
                Camarillo, CA 93010
                </p>

                <div style={courseStyles.infoList}>
                <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>Par:</span>
                    <span style={courseStyles.value}>71</span>
                </div>
                <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>White Tees:</span>
                    <span style={courseStyles.value}>M 67.5/117 | W 72.9/126</span>
                </div>
                <div style={courseStyles.infoRow}>
                    <span style={courseStyles.label}>Red Tees:</span>
                    <span style={courseStyles.value}>M 63.1/106 | W 67.5/112</span>
                </div>
                </div>
            </div>

            {/* Right Column */}
            <div style={courseStyles.column}>
                <h3 style={courseStyles.accomTitle}>
                <Hotel size={18} color="#002b7f" style={{ marginRight: 6 }} />
                Accommodations
                </h3>
                <p style={courseStyles.text}>Courtyard by Marriott</p>
                <p style={courseStyles.subText}>
                1710 Newbury Rd <br />
                Thousand Oaks, CA
                </p>
            </div>
            </div>
        </CardContent>
        </Card>



        {/* Event Schedule */}
        <Card>
          <CardContent>
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircleBlue}>
                <Calendar size={24} color="#ffd700" />
              </div>
              <h2 style={styles.sectionTitle}>Event Schedule</h2>
            </div>

            <div style={styles.gridThree}>
              {["Annual Meeting", "Election", "Awards Ceremony", "Fellowship", "Raffle"].map(
                (item, idx) => (
                  <div key={idx} style={styles.scheduleItem}>
                    <p style={styles.scheduleText}>{item}</p>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Closest to the Pin */}
        <Card>
          <CardContent>
            
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircleBlue}>
                <Award size={24} color="#ffd700" />
              </div>
              <h2 style={styles.sectionTitle}>Closest to the Pin</h2>
            </div>

            {/* Two Columns */}
            <div style={courseStyles.grid}>
            {/* Left Column */}
            <div style={courseStyles.column}>
                <h3 style={styles.subTitle}>Hole 8 Par 3</h3>
                  <div style={styles.infoList}>
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>White:</span>
                      <span style={styles.infoValue}>136 Yards</span>
                    </div>
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>Red: </span>
                      <span style={styles.infoValue}>131 Yards</span>
                    </div>
                  </div>
            </div>

            {/* Right Column */}
            <div style={courseStyles.column}>
                <h3 style={styles.subTitle}>Hole 15 Par 3</h3>
                  <div style={styles.infoList}>
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>White:</span>
                      <span style={styles.infoValue}>146 Yards</span>
                    </div>
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>Red: </span>
                      <span style={styles.infoValue}>125 Yards</span>
                    </div>
                  </div>
            </div>
            </div>

            <div style={styles.rulesBox}>
              <p style={styles.rulesText}>
                <strong>Rules:</strong> Closest-to-the-pin is won by the golfer whose
                tee shot comes to rest closest to the hole. To win, the ball must
                have stopped on the green. Any balls off the green are ignored,
                even if they are the closest.
              </p>
            </div>

            {/* <div style={styles.mapPlaceholder}>
              <MapPin size={40} color="#fff" />
              <p style={styles.mapText}>Course Map Placeholder</p>
            </div> */}
          </CardContent>
        </Card>

        {/* Players Table */}
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
                  {players.map((player, idx) => (
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
      </div>
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
  scheduleItem: {
    flex: "1 1 200px",
    background: "linear-gradient(to bottom right, #f9fafb, #fff)",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1rem",
    display: "flex",          // ✅ ensures text aligns to bottom consistently
    alignItems: "center",     // centers content vertically
    justifyContent: "center", // centers horizontally
    textAlign: "center",      // nice uniform text placement
    boxSizing: "border-box",
  },
  scheduleText: {
    fontWeight: "500",
    color: "#111",
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
    background:
      "linear-gradient(to bottom right, #22c55e, #047857)",
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

  // ===== GRID (2 Columns) =====
  gridTwo: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
  },
  column: {
    flex: "1 1 48%",        // ✅ Two equal columns
    minWidth: "340px",      // Wraps nicely on smaller screens
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  // ===== SECTION (each card) =====
  section: {
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "150px",     // ✅ uniform height
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
