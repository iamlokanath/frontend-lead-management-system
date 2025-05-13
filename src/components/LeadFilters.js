import React from "react";
import {
  Box,
  // Button,
  Chip,
  TextField,
  // ToggleButton,
  // ToggleButtonGroup,
} from "@mui/material";

const statusOptions = ["new", "In Progress", "Completed", "Closed", "Pending"];
const typeOptions = ["Salesperson", "Representative", "Consultant", "Agent"];
const brokerOptions = ["Prime", "TopBroker", "TrustCorp", "SecureLine", "Elite"];
const subscriptionOptions = ["Prepaid", "Premium"];

export default function LeadFilters({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mb: 2,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" },
      }}
    >
      <TextField
        label="Search by customer Phone, lead ID, property ID, agent, name"
        size="small"
        value={filters.search || ""}
        onChange={(e) => handleChange("search", e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: 320 } }}
        fullWidth={false}
      />
      {/* <TextField
        label="Search by postcode"
        size="small"
        value={filters.postcode || ""}
        onChange={(e) => handleChange("postcode", e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: 180 } }}
        fullWidth={false}
      /> */}
      <TextField
        label="From"
        type="date"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={filters.from || ""}
        onChange={(e) => handleChange("from", e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: 120 } }}
        fullWidth={false}
      />
      <TextField
        label="Until"
        type="date"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={filters.until || ""}
        onChange={(e) => handleChange("until", e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: 120 } }}
        fullWidth={false}
      />
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {statusOptions.map((status) => (
          <Chip
            key={status}
            label={status}
            color={filters.status === status ? "primary" : "default"}
            onClick={() =>
              handleChange("status", filters.status === status ? "" : status)
            }
            clickable
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {typeOptions.map((type) => (
          <Chip
            key={type}
            label={type}
            color={filters.type === type ? "primary" : "default"}
            onClick={() =>
              handleChange("type", filters.type === type ? "" : type)
            }
            clickable
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {brokerOptions.map((broker) => (
          <Chip
            key={broker}
            label={broker}
            color={filters.broker === broker ? "primary" : "default"}
            onClick={() =>
              handleChange("broker", filters.broker === broker ? "" : broker)
            }
            clickable
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {subscriptionOptions.map((sub) => (
          <Chip
            key={sub}
            label={sub}
            color={filters.subscription === sub ? "primary" : "default"}
            onClick={() =>
              handleChange(
                "subscription",
                filters.subscription === sub ? "" : sub
              )
            }
            clickable
          />
        ))}
      </Box>
    </Box>
  );
}
