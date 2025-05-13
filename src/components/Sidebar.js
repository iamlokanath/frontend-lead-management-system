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
import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "broker", icon: <PeopleIcon />, path: "/broker" },
  { text: "Lead objects", icon: <AssignmentIcon />, path: "/lead-objects" },
  { text: "Leads", icon: <AssignmentIcon />, path: "/leads" },
  { text: "Tickets", icon: <AssignmentIcon />, badge: 10, path: "/tickets" },
  { text: "Postal codes", icon: <LocalOfferIcon />, path: "/postal-codes" },
  { text: "Support", icon: <SupportAgentIcon />, path: "/support" },
  { text: "Quality", icon: <StarIcon />, path: "/quality" },
  { text: "Finance", icon: <MonetizationOnIcon />, path: "/finance" },
  { text: "statistics", icon: <BarChartIcon />, path: "/statistics" },
];

export default function Sidebar() {
  const location = useLocation();
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
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={NavLink}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: "#222",
              "&.active, &[aria-current=page]": {
                background: "#b2dfdb",
                fontWeight: "bold",
                color: "#00796b",
              },
            }}
          >
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
