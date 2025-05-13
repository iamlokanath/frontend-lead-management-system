import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import LeadFilters from "./components/LeadFilters";
import LeadTable from "./components/LeadTable";
import axios from "axios";
import {
  Box,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 1, md: 3 },
        background: "#f7fafc",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Leads
      </Typography>
      <LeadFilters filters={filters} setFilters={setFilters} />
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <LeadTable
          leads={leads}
          total={total}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
        />
      </Box>
    </Box>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {isMobile && (
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              background: "#eaf6f6",
              color: "#222",
            }}
            elevation={0}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Lead Management System
              </Typography>
            </Toolbar>
          </AppBar>
        )}
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { xs: "100%", md: `calc(100% - 220px)` },
            mt: isMobile ? 8 : 0,
          }}
        >
          <Routes>
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/" element={<Navigate to="/leads" replace />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
