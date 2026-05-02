import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ArrowUpDown, Users } from "lucide-react"; // Removed ExternalLink
import Card from "../../components/tourney/Card";
import CardContent from "../../components/tourney/CardContent";
import Button from "../../components/global/Button";
import Footer from "../../components/global/Footer";
import { membersData } from "../../src/data/membersData";

export default function Members() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle sorting logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Filter and sort the members dynamically
  const filteredAndSortedMembers = useMemo(() => {
    // 1. Filter by search term
    let filtered = membersData.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // 2. Sort the filtered data
    filtered.sort((a, b) => {
      if (sortConfig.key === "name") {
        return sortConfig.direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortConfig.key === "handicap") {
        // Parse float handles numbers stored as strings, or "TBD"
        const valA = parseFloat(a.handicap) || 999; // 999 pushes TBDs to the bottom
        const valB = parseFloat(b.handicap) || 999;
        return sortConfig.direction === "asc" ? valA - valB : valB - valA;
      }
      return 0;
    });

    return filtered;
  }, [searchTerm, sortConfig]);

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
          <h1 style={styles.headerTitle}>Club Members</h1>
          <p style={styles.headerSubtitle}>
            Official handicap indexes and player sheets.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <Card>
          <CardContent>
            {/* Top Toolbar: Title & Search */}
            <div style={styles.toolbar}>
              <div style={styles.titleGroup}>
                <div style={styles.iconCircle}>
                  <Users size={24} color="#ffd700" />
                </div>
                <h2 style={styles.sectionTitle}>Player Roster</h2>
              </div>

              <div style={styles.searchWrapper}>
                <Search size={18} color="#666" style={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
            </div>

            {/* Members Table */}
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeadRow}>
                    <th
                      style={styles.tableHeaderSortable}
                      onClick={() => handleSort("name")}
                    >
                      Player Name
                      <ArrowUpDown size={14} style={{ marginLeft: 8 }} />
                    </th>
                    <th
                      style={styles.tableHeaderSortable}
                      onClick={() => handleSort("handicap")}
                    >
                      Handicap Index
                      <ArrowUpDown size={14} style={{ marginLeft: 8 }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedMembers.length > 0 ? (
                    filteredAndSortedMembers.map((member, idx) => (
                      <tr
                        key={member.id}
                        style={{
                          backgroundColor: idx % 2 === 0 ? "#f9fafb" : "#fff",
                          borderBottom: "1px solid #e5e7eb",
                        }}
                      >
                        <td style={styles.nameCell}>{member.name}</td>
                        <td style={styles.handicapCell}>
                          <span style={styles.handicapBadge}>
                            {member.handicap}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {/* Changed colSpan to 2 since we only have 2 columns now */}
                      <td colSpan="2" style={styles.emptyState}>
                        No members found matching "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
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
        url('https://images.unsplash.com/photo-1576220258822-153014832245?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvbGZ8ZW58MHwwfDB8fHww')
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
    padding: "4rem 2rem",
    paddingTop: "2rem",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "2rem",
    paddingTop: "2rem",
  },
  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#002b7f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    color: "#002b7f",
    margin: 0,
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #e5e7eb",
  },
  searchIcon: {
    marginRight: "0.5rem",
  },
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    width: "100%",
    fontSize: "1rem",
    color: "#333",
  },

  // Table Styles
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  tableHeadRow: {
    backgroundColor: "#002b7f",
    color: "white",
  },
  tableHeader: {
    padding: "1.2rem 1rem",
    fontWeight: "600",
    fontSize: "1rem",
  },
  tableHeaderSortable: {
    padding: "1.2rem 1rem",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    userSelect: "none",
  },
  nameCell: {
    padding: "1.2rem 1rem",
    fontWeight: "600",
    color: "#1f2937",
    fontSize: "1.05rem",
  },
  handicapCell: {
    padding: "1.2rem 1rem",
  },
  handicapBadge: {
    backgroundColor: "#e0ecff",
    color: "#002b7f",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    fontWeight: "700",
    border: "1px solid #b6d0ff",
  },
  emptyState: {
    padding: "3rem",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "1.1rem",
  },
};
