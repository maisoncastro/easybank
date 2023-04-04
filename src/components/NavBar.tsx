import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
// import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const buttonSX = {
    textTransform: "none",
    color: "#000",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: isMobile ? "0px" : "-23px",
      left: 0,
      right: 0,
      height: 0,
      background: "linear-gradient(90deg, #33d167 0%, #2bb9cd 100%)",
      transition: "height 0.3s",
    },
    "&:hover::after": {
      height: "6px",
    },
  };

  const drawerList = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.9rem",
        py: "3rem",
        width: "100vw",
      }}
    >
      <Link href="/" passHref>
        <Button sx={buttonSX}>Home</Button>
      </Link>
      <Link href="/about" passHref>
        <Button sx={buttonSX}>About</Button>
      </Link>
      <Link href="/contact" passHref>
        <Button sx={buttonSX}>Contact</Button>
      </Link>
      <Link href="/blog" passHref>
        <Button sx={buttonSX}>Blog</Button>
      </Link>
      <Link href="/careers" passHref>
        <Button sx={buttonSX}>Careers</Button>
      </Link>
      {/* Request Invite Button */}
      <Button
        sx={{
          background: "linear-gradient(90deg, #33d167 0%, #2bb9cd 100%)",
          color: "#fff",
          borderRadius: "50px",
          py: "0.7rem",
          px: "2.2rem",
          fontSize: "0.8rem",
          fontWeight: 600,
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      >
        Request Invite
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ boxShadow: "none" }} position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-around",
            backgroundColor: "#fff",
            height: "80px",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={139} height={20} />
          </Link>

          {/* Menu Items */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!drawerOpen)}
              >
                <Image
                  src="/icon-hamburger.svg"
                  alt="hamburger menu"
                  width={24}
                  height={24}
                />{" "}
                {/* Updated line */}
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ zIndex: (theme.zIndex?.appBar || 1000) + 1 }} // Update this line
              >
                {drawerList}
              </Drawer>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "0.9rem",
                }}
              >
                <Link href="/" passHref>
                  <Button sx={buttonSX}>Home</Button>
                </Link>
                <Link href="/about" passHref>
                  <Button sx={buttonSX}>About</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button sx={buttonSX}>Contact</Button>
                </Link>
                <Link href="/blog" passHref>
                  <Button sx={buttonSX}>Blog</Button>
                </Link>
                <Link href="/careers" passHref>
                  <Button sx={buttonSX}>Careers</Button>
                </Link>
                {/* Request Invite Button */}
              </Box>
              <Box>
                <Button
                  sx={{
                    background:
                      "linear-gradient(90deg, #33d167 0%, #2bb9cd 100%)",
                    color: "#fff",
                    borderRadius: "50px",
                    py: "0.7rem",
                    px: "2.2rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: "Inter, sans-serif",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  Request Invite
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
