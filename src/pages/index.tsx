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

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Bank</title>
        <meta name="description" content="EasyBank" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Container
        sx={{
          height: "90svh",
          width: "100%",

          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "50%",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "IBM Plex Mono, sans-serif",
            }}
            variant="h3"
            component="div"
          >
            Next Generation
            <br /> Digital Banking
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#7c7c7c",
              mt: "2rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Typography>
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
              mt: "2rem",
              fontFamily: "Inter, sans-serif",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            Request Invite
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
            height: "100%",
            width: "50%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: "-291px",
              top: "-252.10000000000002px",
              zIndex: -1,
            }}
          >
            <Image
              src="/image-mockups.png"
              alt="mockups"
              width={767}
              height={939}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: -2,
              top: "-363px",
              left: "-125px",
            }}
          >
            <Image
              src="/bg-intro-desktop.svg"
              alt="svg-background"
              width={1600}
              height={1400}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
