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
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: "space-around", backgroundColor: "#fff" }}
        >
          {/* Logo */}
          <Typography variant="h6" component="div">
            <Link href="/">
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={100} height={15} />
              </Link>
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
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit">Contact</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button color="inherit">Blog</Button>
            </Link>
            <Link href="/careers" passHref>
              <Button color="inherit">Careers</Button>
            </Link>
          </Box>

          {/* Request Invite Button */}
          <Button
            sx={{
              backgroundColor: "#3b3054",
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
