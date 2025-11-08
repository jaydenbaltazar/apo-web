import React from "react";
import { MapPin } from "lucide-react";
import RegionsCard from "../global/RegionsCard";
import CardContent from "../global/CardContent";

const regions = [
  {
    name: "North Region",
    description:
      "Serving the Santa Barbara, Ventura and Los Angeles area. Known for hosting competitive and scenic tournaments in SoCal's top courses. Mga Valley Boys ito kaya pogi at sikat.",
    gradient: "linear-gradient(to right, #3b82f6, #2563eb)", // blue
  },
  {
    name: "South Region",
    description:
      "Centered around San Diego. Members enjoy year-round sunshine and stunning coastal courses. Sama madala kami sa Torry Pines at local rates.",
    gradient: "linear-gradient(to right, #14b8a6, #0d9488)", // teal
  },
  {
    name: "East Region",
    description:
      "Based around Corona and Inland Empire. Focused on community and fellowship-driven events. Mapagbigay ang mga Braders dito, masarap magpakain.",
    gradient: "linear-gradient(to right, #f97316, #ea580c)", // orange
  },
  {
    name: "West Region",
    description:
      "Covering Long Beach and surrounding areas. The West Region is known for vibrant tournaments and social events. Masarap din magpakaim at malakas magpainom.",
    gradient: "linear-gradient(to right, #8b5cf6, #7c3aed)", // purple
  },
];

export default function RegionsSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Our Regions</h2>
          <div style={styles.underline}></div>
          <p style={styles.subtitle}>
            Our club operates across four dynamic regions in Southern California, each hosting monthly tournaments.
          </p>
        </div>

        {/* ✅ Clean two-column responsive layout */}
        <div style={styles.grid}>
          {regions.map((region, idx) => (
            <RegionsCard key={idx}>
              <div style={{ ...styles.gradientBar, background: region.gradient }} />
              <CardContent>
                <div style={styles.regionRow}>
                  <div
                    style={{
                      ...styles.iconCircle,
                      background: region.gradient,
                    }}
                  >
                    <MapPin size={24} color="#fff" />
                  </div>
                  <div>
                    <h3 style={styles.regionTitle}>{region.name}</h3>
                    <p style={styles.regionDescription}>{region.description}</p>
                  </div>
                </div>
              </CardContent>
            </RegionsCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    background: "linear-gradient(to bottom, #f9fafb, #fff)",
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
    width: "100px",
    height: "4px",
    backgroundColor: "#ffd700",
    margin: "0.5rem auto 1.5rem auto",
    borderRadius: "2px",
  },
  subtitle: {
    fontSize: "1.05rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
  },

  gradientBar: {
    height: "8px",
    width: "calc(100% + 2rem)",
    margin: "-1rem -1rem 1rem -1rem",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },

  regionRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  iconCircle: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  regionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#002b7f",
    marginBottom: "0.4rem",
  },
  regionDescription: {
    color: "#555",
    lineHeight: "1.6",
  },
};
