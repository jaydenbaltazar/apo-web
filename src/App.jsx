// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TournamentDetails from "./pages/TournamentDetails";
import Service from "./pages/Service";
import Tournaments from "./pages/Tournaments";
import Bylaws from "./pages/Bylaws";
import Members from "./pages/Members";
import ApoHistory from "./pages/ApoHistory";
import ApogcHistory from "./pages/ApogcHistory";
import Officers from "./pages/Officers";
import ServiceProjects from "./pages/ServiceProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tournament/:id" element={<TournamentDetails />} />
      <Route path="/service" element={<Service />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/bylaws" element={<Bylaws />} />
      <Route path="/members" element={<Members />} />
      <Route path="/apo-history" element={<ApoHistory />} />
      <Route path="/apogc-history" element={<ApogcHistory />} />
      <Route path="/officers" element={<Officers />} />
      <Route path="/service-projects" element={<ServiceProjects />} />
    </Routes>
  );
}

export default App;
