import React from "react";
import {
  Box,
  Button,
  Chip,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const statusOptions = [
  "new",
  "no feedback",
  "In Progress",
  "waiting",
  "no success",
  "Order placed",
  "completed",
];
const typeOptions = ["Salesperson", "Buyer"];
const brokerOptions = ["Prime"];
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
        alignItems: "center",
      }}
    >
      <TextField
        label="Search by customer number, lead ID, property ID, agent, name"
        size="small"
        value={filters.search || ""}
        onChange={(e) => handleChange("search", e.target.value)}
        sx={{ minWidth: 320 }}
      />
      <TextField
        label="Search by postcode"
        size="small"
        value={filters.postcode || ""}
        onChange={(e) => handleChange("postcode", e.target.value)}
        sx={{ minWidth: 180 }}
      />
      <TextField
        label="From"
        type="date"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={filters.from || ""}
        onChange={(e) => handleChange("from", e.target.value)}
      />
      <TextField
        label="Until"
        type="date"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={filters.until || ""}
        onChange={(e) => handleChange("until", e.target.value)}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
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
      <Box sx={{ display: "flex", gap: 1 }}>
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
      <Box sx={{ display: "flex", gap: 1 }}>
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
      <Box sx={{ display: "flex", gap: 1 }}>
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
