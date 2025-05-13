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
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AdjustIcon from '@mui/icons-material/Adjust';
import ListIcon from '@mui/icons-material/List';
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
  { text: "Lead objects", icon: <AdjustIcon />, path: "/lead-objects" },
  { text: "Leads", icon: <WhatshotIcon />, path: "/leads" },
  { text: "Tickets", icon: <ListIcon />, path: "/tickets" },
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
           
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
