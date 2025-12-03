import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPreview from "./pages/DashboardPreview";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/preview" element={<DashboardPreview />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
