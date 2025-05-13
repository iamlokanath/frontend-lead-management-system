import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import LeadFilters from "./components/LeadFilters";
import LeadTable from "./components/LeadTable";
import axios from "axios";
import { Box, Typography, CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";

function LeadsPage() {
  const [filters, setFilters] = useState({});
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchLeads = async () => {
      const params = { ...filters, page, limit };
      const { data } = await axios.get("http://localhost:5000/api/leads", {
        params,
      });
      setLeads(data.leads);
      setTotal(data.total);
    };
    fetchLeads();
  }, [filters, page, limit]);

  return (
    <Box sx={{ flexGrow: 1, p: 3, background: "#f7fafc", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Leads
      </Typography>
      <LeadFilters filters={filters} setFilters={setFilters} />
      <LeadTable
        leads={leads}
        total={total}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/" element={<Navigate to="/leads" replace />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
