import React from "react";
import HeroSection from "../../components/home/HeroSection"
import NextTournament from "../../components/home/NextTournament";
import RegionsSection from "../../components/home/RegionsSection";
import AnnouncementsSection from "../../components/home/AnnouncementsSection";
import Footer from "../../components/global/Footer";
import NavBar from "../../components/nav/NavBar";

export default function Home() {
  return (
    <div style={styles.container}>
      <NavBar/>
      <HeroSection />
      <NextTournament />
      <RegionsSection />
      <AnnouncementsSection />
      <Footer/>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
}