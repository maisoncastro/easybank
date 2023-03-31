import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

function NavBar() {
  const buttonSX = {
    textTransform: "none",
    color: "#000",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-around",
            backgroundColor: "#fff",
            height: "3rem",
          }}
        >
          {/* Logo */}
          <Typography variant="h6" component="div">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={100} height={15} />
            </Link>
          </Typography>

          {/* Menu Items */}
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
          </Box>

          {/* Request Invite Button */}
          <Button
            sx={{
              background: "linear-gradient(90deg, #33d167 0%, #2bb9cd 100%)",
              color: "#fff",
              borderRadius: "50px",
              py: "0.5rem",
              px: "1.9rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            Request Invite
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
