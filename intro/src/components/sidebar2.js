import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Tooltip,
  Divider,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./logo";
import navbarList from "./navbarlist";

const drawerWidthOpen = 180;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

function NavbarItem({
  item: { icon: IconComponent, desc, redirect_to, badge, open },
  onClick,
}) {
  const theme = useTheme();

  return (
    <Tooltip
      title={open ? desc : ""}
      placement={"right"}
      sx={{ alignItems: "center" }}
    >
      <ListItemButton
        component={Link}
        to={redirect_to}
        sx={{ margin: "8px 0" }}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }}
        >
          <Badge badgeContent={badge} color="secondary" variant="dot">
            <IconComponent sx={{ fontSize: "18px", color: "lightgray" }} />
          </Badge>
        </ListItemIcon>
        <ListItemText
          primary={desc}
          sx={{
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transition: theme.transitions.create(["opacity", "visibility"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }}
        />
      </ListItemButton>
    </Tooltip>
  );
}

function SocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 2,
        justifyContent: "center",
        color: "white",
        marginBottom: "10px",
      }}
    >
      <div className="githubicon">
        <a href="https://github.com/welhoilija">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/tuomas-kangas-901207170/">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://t.me/TuomasKangas">
          <TelegramIcon fontSize="large" />
        </a>
      </div>
    </Box>
  );
}

export default function SideNavbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(matches);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: "100%", sm: drawerWidthOpen }
            : { xs: drawerWidthClose, sm: drawerWidthClose },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            width: open
              ? { xs: "100%", sm: drawerWidthOpen }
              : { xs: drawerWidthClose, sm: drawerWidthClose },
            backgroundColor: "#11101D",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Header />
          <Button
            sx={{ color: "white", marginTop: "8px" }}
            onClick={toggleOpen}
            aria-label="toggle drawer"
          >
            <MenuIcon />
          </Button>
        </Box>
        <Divider variant="middle" light={true} sx={{ bgcolor: "white" }} />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            overflow: "hidden",
            color: "white",
          }}
        >
          {navbarList.map((item, index) => (
            <NavbarItem
              key={item.desc}
              item={{ ...item, index, open }}
              onClick={closeDrawer}
            />
          ))}
        </List>
        <Divider variant="middle" light={true} sx={{ bgcolor: "white" }} />
        <SocialLinks />
      </Drawer>
    </Box>
  );
}
