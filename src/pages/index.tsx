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
      {/* Stickied NavBar */}

      {/* Header */}
      <Container
        sx={{
          height: "90vh",
        }}
      >
        <Box>Hello</Box>
      </Container>
    </>
  );
}
