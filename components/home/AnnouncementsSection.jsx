import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Trophy, Calendar } from "lucide-react";
import AnnouncementCard from "../announcement/AnnouncementCard";
import AnnouncementCardContent from "../announcement/AnnouncementCardContent";

export default function AnnouncementsSection() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Announcements</h2>
          <div style={styles.divider}></div>
        </div>

        <AnnouncementCard>
          <AnnouncementCardContent>
            <div style={styles.list}>
              {/* Announcement 1 */}
              <div style={styles.item}>
                <div style={{ ...styles.iconCircle, backgroundColor: "#d1fae5" }}>
                  <CheckCircle size={24} color="#059669" />
                </div>
                <div>
                  <h3 style={styles.itemTitle}>
                    October Tournament Results Posted!
                  </h3>
                  <p style={styles.itemText}>
                    Check out the scores and photos from our October tournament.
                    Congratulations to all participants!
                  </p>
                </div>
              </div>

              {/* Announcement 2 */}
              <div
                style={{
                  ...styles.item,
                  backgroundColor: "rgba(255, 215, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    ...styles.iconCircle,
                    backgroundColor: "#ffd700",
                    transition: "transform 0.2s",
                  }}
                >
                  <Trophy size={24} color="#002b7f" />
                </div>
                <div>
                  <h3 style={{ ...styles.itemTitle, color: "#002b7f" }}>
                    Congratulations to the Ryder Cup Champions! GO SOCAL!!
                  </h3>
                  <p style={styles.itemText}>
                    Click here to see photos and celebrate our amazing victory!
                  </p>
                </div>
              </div>

              {/* Announcement 3 */}
              <div style={styles.item}>
                <div style={{ ...styles.iconCircle, backgroundColor: "#dbeafe" }}>
                  <Calendar size={24} color="#2563eb" />
                </div>
                <div>
                  <h3 style={styles.itemTitle}>
                    December Tournament – Hosted by TBD Region.
                    Registration Opens Soon!
                  </h3>
                  <p style={styles.itemText}>
                    Save the date for our December tournament. More details and
                    registration coming soon.
                  </p>
                </div>
              </div>
            </div>
          </AnnouncementCardContent>
        </AnnouncementCard>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 1rem",
    backgroundColor: "#fff",
    width: "100%",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1.5rem", 
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
  divider: {
    width: "100px",
    height: "5px",
    backgroundColor: "#ffd700",
    margin: "0 auto",
    borderRadius: "2px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    borderRadius: "10px",
    padding: "1rem",
    transition: "background-color 0.2s ease",
  },
  iconCircle: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  itemTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.3rem",
  },
  itemText: {
    fontSize: "0.95rem",
    color: "#4b5563",
    lineHeight: "1.6",
  },
};
