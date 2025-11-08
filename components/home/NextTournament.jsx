import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Trophy, DollarSign, Clock } from "lucide-react";
import Card from "../global/Card";
import Button from "../global/Button";

export default function NextTournament() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Next Tournament</h2>
          <div style={styles.underline}></div>
        </div>

        {/* Card */}
        <Card>
          <div style={styles.cardContent}>
            {/* Image */}
            <div
              style={{
                ...styles.image,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1000')",
              }}
            ></div>

            {/* Details */}
            <div style={styles.details}>
              <div style={styles.infoContainer}>
                {infoRows.map((row, idx) => (
                  <div key={idx} style={styles.infoRow}>
                    {React.createElement(row.icon, {
                      size: 24,
                      color: "#002b7f",
                      style: { marginTop: 4, flexShrink: 0 },
                    })}
                    <div>
                      <div style={styles.infoLabel}>{row.label}</div>
                      <div style={styles.infoValue}>{row.value}</div>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "1.5rem", width: "100%" }}>
                  <Button
                    label="More Information"
                    onClick={() => navigate("/TournamentDetails")}
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

const infoRows = [
  { icon: Calendar, label: "Date", value: "November 8, 2025" },
  { icon: MapPin, label: "Region", value: "North (Hosted by the Valley Boys)" },
  { icon: Trophy, label: "Venue", value: "Sterling Hills Golf Club, Camarillo, CA" },
  { icon: Clock, label: "Format • Start", value: "Handicap Stroke Play • 10:00 AM" },
  { icon: DollarSign, label: "Fee", value: "$115/player" },
];

const styles = {
  section: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "5rem 1rem",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#002b7f",
    marginBottom: "0.5rem",
  },
  underline: {
    width: "80px",
    height: "4px",
    backgroundColor: "#ffd700",
    margin: "0 auto",
    borderRadius: "2px",
  },
  cardContent: {
    display: "flex",
    flexWrap: "wrap", // ✅ makes it wrap on smaller screens
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: {
    flex: "1 1 400px", // grows but keeps minimum width
    minWidth: "300px",
    height: "auto",
    aspectRatio: "4 / 3",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  details: {
    flex: "1 1 400px",
    padding: "2rem 2.5rem",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  infoLabel: {
    fontSize: "0.9rem",
    color: "#666",
    fontWeight: 500,
  },
  infoValue: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#111",
  },
};
