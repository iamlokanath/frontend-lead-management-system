import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

const columns = [
  { id: "date", label: "Date" },
  { id: "leadId", label: "Lead ID" },
  { id: "objectId", label: "Object ID" },
  { id: "type", label: "type" },
  { id: "company", label: "company" },
  { id: "name", label: "name" },
  { id: "status", label: "status" },
  { id: "broker", label: "broker" },
  { id: "subscription", label: "subscription" },
  { id: "act", label: "act." },
];

export default function LeadTable({
  leads,
  total,
  page,
  setPage,
  limit,
  setLimit,
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id}>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((row) => (
              <TableRow hover key={row._id}>
                {columns.map((col) => (
                  <TableCell key={col.id}>{row[col.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="body2">Items per page:</Typography>
        <Select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          size="small"
          sx={{ mx: 1 }}
        >
          {[10, 25, 50, 100].map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
        <TablePagination
          component="div"
          count={total}
          page={page - 1}
          onPageChange={(e, newPage) => setPage(newPage + 1)}
          rowsPerPage={limit}
          onRowsPerPageChange={(e) => setLimit(parseInt(e.target.value, 10))}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </Box>
    </Paper>
  );
}
