import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import Pro from "./Pro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/pro" element={<Pro />} />
      </Routes>
    </Router>
  );
}

export default App;
