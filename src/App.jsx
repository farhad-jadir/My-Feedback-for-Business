import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}
