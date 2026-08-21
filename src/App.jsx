import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminTeam from "./pages/admin/AdminTeam";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin/team" element={<AdminTeam />} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
