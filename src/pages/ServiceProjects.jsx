import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  HeartHandshake,
  X,
  CheckCircle2,
} from "lucide-react";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";
import { serviceProjectsData } from "../data/serviceProjectData"; // Adjust path as needed

export default function ServiceProjects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

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
          <h1 style={styles.headerTitle}>Service Projects</h1>
          <p style={styles.headerSubtitle}>
            Living the core values of leadership, friendship, and service.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          {serviceProjectsData.map((project) => (
            <div
              key={project.id}
              style={styles.card}
              onClick={() => setSelectedProject(project)}
            >
              <div
                style={{
                  ...styles.cardImage,
                  backgroundImage: `url(${project.image})`,
                }}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{project.title}</h3>

                <div style={styles.cardMeta}>
                  <div style={styles.metaRow}>
                    <MapPin size={14} color="#666" />
                    <span>{project.location}</span>
                  </div>
                  <div style={styles.metaRow}>
                    <User size={14} color="#666" />
                    <span>Led by: {project.leader}</span>
                  </div>
                </div>

                <p style={styles.cardSummary}>{project.summary}</p>

                <div style={styles.readMoreWrapper}>
                  <span style={styles.readMoreText}>
                    Read Full Story &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* === MODAL OVERLAY === */}
      {selectedProject && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedProject(null)}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#333",
                  lineHeight: 1,
                }}
              >
                ✕
              </span>{" "}
            </button>

            <div
              style={{
                ...styles.modalImage,
                backgroundImage: `url(${selectedProject.image})`,
              }}
            />

            <div style={styles.modalBody}>
              <div style={styles.modalTagGroup}>
                <span style={styles.modalTag}>
                  <Calendar size={14} style={{ marginRight: 4 }} />{" "}
                  {selectedProject.date}
                </span>
                <span style={styles.modalTag}>
                  <MapPin size={14} style={{ marginRight: 4 }} />{" "}
                  {selectedProject.location}
                </span>
              </div>

              <h2 style={styles.modalTitle}>{selectedProject.title}</h2>

              <div style={styles.modalLeadInfo}>
                <p>
                  <strong>Lead:</strong> {selectedProject.leader}
                </p>
                <p>
                  <strong>Partners:</strong> {selectedProject.partners}
                </p>
              </div>

              {selectedProject.fullDescription.map((paragraph, idx) => (
                <p key={idx} style={styles.modalText}>
                  {paragraph}
                </p>
              ))}

              {selectedProject.highlights &&
                selectedProject.highlights.length > 0 && (
                  <div style={styles.highlightsBox}>
                    <h4 style={styles.highlightsTitle}>
                      <HeartHandshake size={18} style={{ marginRight: 8 }} />
                      Project Highlights & Contributions
                    </h4>
                    <ul style={styles.highlightsList}>
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={idx} style={styles.highlightItem}>
                          <CheckCircle2
                            size={16}
                            color="#002b7f"
                            style={{ flexShrink: 0, marginTop: 2 }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
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

  // Grid & Card Styles
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    flex: "1 1 350px",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "220px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardContent: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#002b7f",
    margin: "0 0 1rem 0",
    lineHeight: "1.3",
  },
  cardMeta: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    marginBottom: "1rem",
    fontSize: "0.9rem",
    color: "#4b5563",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  cardSummary: {
    fontSize: "0.95rem",
    color: "#374151",
    lineHeight: "1.5",
    marginBottom: "1.5rem",
    flexGrow: 1,
  },
  readMoreWrapper: {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "1rem",
    marginTop: "auto",
  },
  readMoreText: {
    color: "#002b7f",
    fontWeight: "600",
    fontSize: "0.95rem",
  },

  // Modal Styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "1rem",
    boxSizing: "border-box",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "800px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
    zIndex: 10,
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 20,
  },
  modalImage: {
    width: "100%",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  modalBody: {
    padding: "2rem",
  },
  modalTagGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  modalTag: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.85rem",
    color: "#4b5563",
    fontWeight: "600",
  },
  modalTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#002b7f",
    margin: "0 0 1.5rem 0",
    lineHeight: "1.2",
  },
  modalLeadInfo: {
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #ffd700",
    padding: "1rem 1.5rem",
    marginBottom: "1.5rem",
    borderRadius: "0 8px 8px 0",
    color: "#002b7f",
  },
  modalText: {
    fontSize: "1.05rem",
    color: "#374151",
    lineHeight: "1.7",
    marginBottom: "1.2rem",
  },
  highlightsBox: {
    marginTop: "2rem",
    backgroundColor: "#e0ecff",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #b6d0ff",
  },
  highlightsTitle: {
    display: "flex",
    alignItems: "center",
    color: "#002b7f",
    fontSize: "1.2rem",
    margin: "0 0 1rem 0",
  },
  highlightsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  highlightItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.8rem",
    fontSize: "1.05rem",
    color: "#1f2937",
    fontWeight: "500",
  },
};
