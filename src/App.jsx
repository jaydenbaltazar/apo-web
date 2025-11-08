// /src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TournamentDetails from "./pages/TournamentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tournamentdetails" element={<TournamentDetails />} />

    </Routes>
  );
}

export default App;
