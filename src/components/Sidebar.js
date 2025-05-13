import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "broker", icon: <PeopleIcon /> },
  { text: "Lead objects", icon: <AssignmentIcon /> },
  { text: "Leads", icon: <AssignmentIcon /> },
  { text: "Tickets", icon: <AssignmentIcon />, badge: 10 },
  { text: "Postal codes", icon: <LocalOfferIcon /> },
  { text: "Support", icon: <SupportAgentIcon /> },
  { text: "Quality", icon: <StarIcon /> },
  { text: "Finance", icon: <MonetizationOnIcon /> },
  { text: "statistics", icon: <BarChartIcon /> },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
          background: "#eaf6f6",
        },
      }}
    >
      <div style={{ height: 64 }} />
      <List>
        {menuItems.map((item, idx) => (
          <ListItem button key={item.text} selected={item.text === "Leads"}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.badge && (
              <span
                style={{
                  background: "#e57373",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "2px 8px",
                  fontSize: 12,
                  marginLeft: 8,
                }}
              >
                {item.badge}
              </span>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
