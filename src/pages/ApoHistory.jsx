import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  History,
  Users,
  Globe,
  BookOpen,
  MapPin,
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

  const charterMembers = [
    { role: "National President", name: "Dr. Librado I. Ureta" },
    {
      role: "National First Vice President",
      name: "Col. Ignacio J. Sevilla, Sr.",
    },
    { role: "National Second Vice President", name: "Dr. Romeo Y. Atienza" },
    {
      role: "National Third Vice President",
      name: "Dr. Guillermo R. Padolina",
    },
    { role: "National Secretary", name: "Godofredo P. Neric" },
    { role: "National Treasurer", name: "Leonardo R. Osorio (BSP)" },
    { role: "National Editor and Historian", name: "Ralph G. Hawkins" },
    { role: "National Director of Relationship", name: "Alfredo de los Reyes" },
    {
      role: "National Executive Board Member",
      name: "Lamberto T. Dominguez (BSP)",
    },
    {
      role: "National Executive Board Member",
      name: "Dr. Bonifacio V. Lazcano (BSP)",
    },
    { role: "National Executive Board Member", name: "Max M. Velasco" },
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
          <h1 style={styles.headerTitle}>Alpha Phi Omega History</h1>
          <p style={styles.headerSubtitle}>
            The founding roots of APO in the USA and the Philippines.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Two Column Layout Wrapper */}
        <div style={styles.twoColumnWrapper}>
          {/* === LEFT COLUMN: THE NARRATIVE === */}
          <div style={styles.leftColumn}>
            {/* APO USA */}
            <Card>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <Globe size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>Alpha Phi Omega (APO) USA</h2>
                </div>

                <p style={courseStyles.text}>
                  Alpha Phi Omega (APO) USA fraternity was founded on{" "}
                  <strong>December 16, 1925</strong>, at Lafayette College in
                  Easton, Pennsylvania, by Frank Reed Horton and 13 other
                  students to promote leadership, friendship, and service.
                </p>
                <p style={courseStyles.text}>
                  The organization is based on the principles derived from the
                  Scout Oath and the Law of the Boy Scouts, setting high
                  standards for all members to follow.
                </p>
              </CardContent>
            </Card>

            {/* APO Philippines */}
            <Card style={{ marginTop: "2rem" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <BookOpen size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>
                    Alpha Phi Omega Philippines
                  </h2>
                </div>

                <h3 style={styles.subHeading}>
                  It all started with a service project.
                </h3>

                <p style={courseStyles.text}>
                  World War II had recently ended, but it had left devastation
                  around the world. The major cities of Europe had been heavily
                  damaged, and many of the cities of Asia and the Pacific had
                  been destroyed. Manila, the capital of the former US colony
                  Philippines had been occupied and was now in ruins, its
                  universities, rubble. What, if anything, could college
                  students across the Pacific in the United States do that would
                  have any real effect? It turns out quite a lot!
                </p>

                <p style={courseStyles.text}>
                  Some of the Alpha Phi Omega-USA Brothers in Texas and the
                  Pacific Northwest had fought in these islands. They knew,
                  firsthand, of the friendliness of the people and of their
                  need. They knew that education of the young people was a vital
                  necessity if the country was to get back to its feet. They
                  could do something, and they did. Book drives were started on
                  their campuses and hundreds of textbooks, used but useable,
                  were gathered from their libraries and fellow students to be
                  sent to the Philippines to help re-stock the many burnt-out
                  college libraries in Manila.
                </p>

                <p style={courseStyles.text}>
                  It was a successful service project, but like many one-time
                  projects, it was soon forgotten, remembered only in the
                  scrapbooks of the chapters involved and in the mind of the
                  then APO-USA National President (1931-1946) H. Roe Bartle “The
                  Chief”. It was a good example of a service project; it had all
                  the elements of a good story; and the Chief never forgot a
                  good story.
                </p>

                <p style={courseStyles.text}>
                  The story was of particular interest to a group of Scouts at
                  Far Eastern University in Manila. It may be that their library
                  was one of those which had been helped, or it may be that the
                  idea of a Scouting-based fraternity just struck fertile
                  ground. Librado Inocencio Ureta, an Eagle Scout, a graduate
                  student, was among the audience; together with a group of over
                  twenty Scouts and advisors began organizing work.
                </p>

                <div style={styles.highlightBox}>
                  <MapPin
                    size={24}
                    color="#002b7f"
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <p style={styles.highlightText}>
                    On <strong>March 2, 1950</strong>, at the Nicanor Reyes
                    Hall, Room 214, Far Eastern University, Manila, Philippines;
                    the first organization of Alpha Phi Omega outside of the
                    United States of America was established. It is now known as
                    the <strong>Alpha Chapter</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* === RIGHT COLUMN: CHARTER MEMBERS === */}
          <div style={styles.rightColumn}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <div style={courseStyles.header}>
                  <div style={courseStyles.iconCircle}>
                    <Award size={22} color="#ffd700" />
                  </div>
                  <h2 style={courseStyles.title}>First National Officers</h2>
                </div>

                <p
                  style={{
                    ...courseStyles.text,
                    fontSize: "0.95rem",
                    color: "#666",
                    marginBottom: "1.5rem",
                  }}
                >
                  The Charter members who served as the first National Officers
                  of the Alpha Chapter:
                </p>

                <div style={timelineStyles.container}>
                  {charterMembers.map((member, idx) => (
                    <div key={idx} style={timelineStyles.item}>
                      <div style={timelineStyles.node}>
                        <div style={timelineStyles.dot}></div>
                        {idx !== charterMembers.length - 1 && (
                          <div style={timelineStyles.line}></div>
                        )}
                      </div>

                      <div style={timelineStyles.content}>
                        <h4 style={timelineStyles.term}>{member.role}</h4>
                        <h3 style={timelineStyles.name}>{member.name}</h3>
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
    alignItems: "stretch",
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

  subHeading: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#002b7f",
    marginTop: "0.5rem",
    marginBottom: "1rem",
  },
  highlightBox: {
    backgroundColor: "#e0ecff",
    border: "1px solid #b6d0ff",
    borderRadius: "8px",
    padding: "1.5rem",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  highlightText: {
    fontSize: "1.05rem",
    color: "#1f2937",
    lineHeight: "1.6",
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
    color: "#374151",
    marginBottom: "1.2rem",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  },
};

const timelineStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    paddingLeft: "0.5rem",
  },
  item: {
    display: "flex",
    minHeight: "65px",
  },
  node: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "1.2rem",
  },
  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "#ffd700",
    border: "2px solid #002b7f",
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
    fontSize: "1.05rem",
    color: "#111827",
    fontWeight: "700",
    margin: "0.2rem 0 0 0",
  },
};
