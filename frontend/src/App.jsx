import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn";
import MultiAgroForestry from "./pages/MultiCropping";
import Agroforestry from "./pages/Agroforestry";
import Market from "./pages/Market";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/multicropping" element={<MultiAgroForestry />} />
        <Route path="/learn/agroforestry" element={<Agroforestry />} />
        <Route path="/learn/market" element={<Market />} />
        <Route path="/learn/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}
