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

const Footer = () => {
  const footerButton = {
    textTransform: "none",
    color: "#262626",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  return (
    <>
      {/* Footer  */}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",

          height: { xs: "100%", sm: "13rem" },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            rowGap: { xs: "2rem", sm: 0 },

            py: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between ",
                rowGap: { xs: "2rem", sm: null },
                width: "100%",
              }}
            >
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={139} height={20} />
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "space-between",
                }}
              >
                <Link href="/">
                  <Image
                    src="/icon-facebook-black.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-twitter-black.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-youtube-black.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-instagram-black.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-pinterest-black.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 0, sm: "10rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "flex-start",
              }}
            >
              <Link href="/">
                <Button sx={footerButton}>About Us</Button>
              </Link>
              <Link href="/">
                <Button sx={footerButton}>Contact</Button>
              </Link>
              <Link href="/">
                <Button sx={footerButton}>Blog</Button>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Link href="/">
                <Button sx={footerButton}>Careers</Button>
              </Link>
              <Link href="/">
                <Button sx={footerButton}>Support</Button>
              </Link>
              <Link href="/">
                <Button sx={footerButton}>Privacy Policy</Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-end" },
              rowGap: { xs: "2rem", sm: null },
              justifyContent: "space-between",
            }}
          >
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
                  filter: "brightness(110%)",
                },
              }}
            >
              Request Invite
            </Button>
            <Box>
              <Typography
                sx={{
                  color: "#262626",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
                component="div"
              >
                &#169; Easybank. All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
