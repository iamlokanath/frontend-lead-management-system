import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7fafc",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Under Construction
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This page is currently under construction.
        <br />
        Kindly visit the Leads page to see the leads data.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/leads">
        Go to Leads Page
      </Button>
    </Box>
  );
}
