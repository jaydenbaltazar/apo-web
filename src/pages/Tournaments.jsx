import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Trophy,
  DollarSign,
  Clock,
  Image as ImageIcon,
} from "lucide-react";
import Card from "../../components/global/Card";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";
import { tournamentsData } from "../data/tournamentInfo";

// 1. Moved outside the main component to prevent unnecessary re-renders
const TournamentCard = ({ data, navigate }) => (
  <Card>
    <div style={styles.cardContent}>
      <div
        style={{
          ...styles.image,
          backgroundImage: `url('${data.image}')`,
        }}
      ></div>
      <div style={styles.details}>
        <h3 style={styles.cardTitle}>{data.title}</h3>
        <div style={styles.infoContainer}>
          <InfoRow icon={Calendar} label="Date" value={data.date} />
          <InfoRow
            icon={MapPin}
            label="Region"
            value={`${data.location} (Hosted by ${data.host})`}
          />
          <InfoRow icon={Trophy} label="Venue" value={data.venue} />
          <InfoRow
            icon={Clock}
            label="Format • Start"
            value={`${data.format} • ${data.time}`}
          />
          <InfoRow icon={DollarSign} label="Fee" value={data.fee} />

          <div style={styles.buttonGroup}>
            <Button
              label="More Information"
              // 2. Fixed the bug: changed tournament.id to data.id
              onClick={() => navigate(`/tournament/${data.id}`)}
              fullWidth={data.status === "future"}
            />
            {data.photosLink && (
              <Button
                label={
                  <span>
                    <ImageIcon
                      size={16}
                      style={{ marginRight: 6, display: "inline" }}
                    />{" "}
                    View Photos
                  </span>
                }
                onClick={() => window.open(data.photosLink, "_blank")}
                variant="outline"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const InfoRow = ({ icon: Icon, label, value }) => (
  <div style={styles.infoRow}>
    <Icon size={20} color="#002b7f" style={{ marginTop: 2, flexShrink: 0 }} />
    <div>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  </div>
);

export default function Tournaments() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const futureTournaments = tournamentsData.filter(
    (t) => t.status === "future",
  );
  const pastTournaments = tournamentsData.filter((t) => t.status === "past");

  return (
    <div style={styles.page}>
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
          <h1 style={styles.headerTitle}>Tournaments</h1>
          <p style={styles.headerSubtitle}>
            Join us on the green for fellowship and competition.
          </p>
        </div>
      </div>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Upcoming Tournaments</h2>
          <div style={styles.underline}></div>
          <div style={styles.grid}>
            {futureTournaments.map((t) => (
              // 3. Pass the navigate function as a prop so the card can use it
              <TournamentCard key={t.id} data={t} navigate={navigate} />
            ))}
          </div>

          <div style={{ marginTop: "5rem" }}>
            <h2 style={styles.sectionTitle}>Past Tournaments</h2>
            <div style={styles.underline}></div>
            <div style={styles.grid}>
              {pastTournaments.map((t) => (
                <TournamentCard key={t.id} data={t} navigate={navigate} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const styles = {
  page: { width: "100vw", minHeight: "100vh", backgroundColor: "#f9fafb" },
  header: {
    backgroundImage: `
        linear-gradient(
        rgba(0, 43, 127, 0.7),
        rgba(0, 43, 127, 0.7)
        ),
        url('https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZnxlbnwwfDB8MHx8fDA%3D')
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
  headerTitle: { fontSize: "3rem", fontWeight: "bold", marginBottom: "0.5rem" },
  headerSubtitle: { fontSize: "1.2rem", color: "#a8c0ff" },
  section: { padding: "4rem 1rem" },
  container: { maxWidth: "1100px", margin: "0 auto" },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#002b7f",
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#ffd700",
    margin: "0 auto 3rem auto",
    borderRadius: "2px",
  },
  grid: { display: "flex", flexDirection: "column", gap: "2.5rem" },
  cardContent: { display: "flex", flexWrap: "wrap", backgroundColor: "#fff" },
  image: {
    flex: "1 1 350px",
    minWidth: "300px",
    minHeight: "300px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  details: { flex: "1 1 400px", padding: "2rem 2.5rem" },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#002b7f",
    marginBottom: "1.5rem",
    fontWeight: "bold",
  },
  infoContainer: { display: "flex", flexDirection: "column", gap: "1rem" },
  infoRow: { display: "flex", alignItems: "flex-start", gap: "1rem" },
  infoLabel: {
    fontSize: "0.85rem",
    color: "#666",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  infoValue: { fontSize: "1rem", fontWeight: 600, color: "#111" },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  },
  backButtonLabel: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: 500,
  },
};
