import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Map from "./Pages/Map";

function Layout() {
  const location = useLocation(); // বর্তমান URL চেক করা হচ্ছে

  return (
    <>
      <Navbar />
      {location.pathname !== "/map" && <Home />} {/* শুধুমাত্র /map এ গেলে Home হাইড হবে */}
      <Routes>
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
