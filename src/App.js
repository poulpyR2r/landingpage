import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import Pro from "./Pro";

function App() {
  return (
    // Remplacer "nomDuDepot" par le nom réel de votre dépôt GitHub
    <Router basename="/landingpage">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/pro" element={<Pro />} />
      </Routes>
    </Router>
  );
}

export default App;
