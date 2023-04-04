import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const whyCards = [
    {
      id: 1,
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      image: "/icon-online.svg",
    },
    {
      id: 2,
      title: "Simple Bugeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      image: "/icon-budgeting.svg",
    },
    {
      id: 3,
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      image: "/icon-onboarding.svg",
    },
    {
      id: 4,
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      image: "/icon-api.svg",
    },
  ];

  const latestArticles = [
    {
      id: 1,
      title: "Receive money in any currency with no fees",
      author: "By Claire Robinson",
      description:
        "As the world becomes more interconnected and our mobility increases, it's essential to break free from the limitations of receiving money through a single method.",
      image: "/image-currency.jpg",
    },
    {
      id: 2,
      title: "Treat yourself without worrying about money",
      author: "By Wilson Hutton",
      description:
        "Our user-friendly budgeting feature enables you to categorize your expenses and establish practical monthly limits, promoting more effective financial management.",
      image: "/image-restaurant.jpg",
    },
    {
      id: 3,
      title: "Take your Easybank card wherever you go",
      author: "By Wilson Hutton",
      description:
        "Our goal is for you to fully enjoy your travels, which is why we eliminate any fees on purchases made during your time abroad.",
      image: "/image-plane.jpg",
    },
    {
      id: 4,
      author: " By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "Following extensive collaborative efforts by our dedicated team, we are thrilled to announce the launch of our closed beta.",
      image: "/image-confetti.jpg",
    },
  ];

  const containerBox = {
    width: "100%",
    backgroundColor: "#f6f8f4",
    py: { xs: "5rem", sm: "10rem" },
  };

  const whyTypography = {
    color: "#7c7c7c",

    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  };

  const whySX = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "1.6rem",
    textAlign: "center",

    backgroundColor: "#f2f5f0",
    p: "1.5rem",
    borderRadius: "15px",
    border: "1px solid #e1e1e1",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)",
    maxWidth: "300px",
  };

  return (
    <>
      <Head>
        <title>Easy Bank</title>
        <meta name="description" content="EasyBank" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f2f5f0",
          pb: { xs: "5rem", sm: 0 },

          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Container
          sx={{
            height: isMobile ? "90svh" : "100svh",

            display: "flex",
            alignItems: { xs: "center", sm: null },

            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "flex-start" },
              width: "50%",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono, sans-serif",
                color: "#262626",
                textAlign: { xs: "center", sm: "left" },
              }}
              variant="h3"
              component="div"
            >
              Next Generation
              <br />
              Digital Banking
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#7c7c7c",
                mt: "2rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1.1rem",
                textAlign: { xs: "center", sm: "left" },
                width: { xs: "335px", sm: "auto" },
              }}
            >
              Take your financial life online.
              <br />
              Your Easybank account will be a one-stop-shop for spending,
              saving, budgeting, investing, and much more.
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
              alignItems: { xs: "center", sm: "flex-end" },
              position: "relative",
              height: "100%",
              width: "50%",
            }}
          >
            {isMobile ? (
              <Box
                sx={{
                  display: "none",
                }}
              >
                <Image
                  src="/image-mockups.png"
                  alt="mockups"
                  width={567}
                  height={739}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  position: { xs: null, sm: "absolute" },
                  right: { xs: 0, sm: "-291px" },
                }}
              >
                <Image
                  src="/image-mockups.png"
                  alt="mockups"
                  width={767}
                  height={939}
                />
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Why  */}

      <Box sx={containerBox}>
        <Container
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "4rem",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                textAlign: { xs: "center", sm: "left" },
              }}
              variant="h4"
              component="div"
            >
              Why choose Easybank?
            </Typography>
            <Typography
              component="div"
              sx={{
                color: "#7c7c7c",
                mt: "2rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                textAlign: { xs: "center", sm: "left" },
                width: { xs: "250px", sm: "100%" },
              }}
            >
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {whyCards.map((why) => (
              <Box sx={whySX} key={why.id}>
                <Image src={why.image} alt="online" width={80} height={80} />
                <Typography variant="h6" component="div">
                  {why.title}
                </Typography>
                <Typography sx={whyTypography} component="div">
                  {why.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Articles  */}
      <Box sx={containerBox}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              mb: "4rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                mb: "3rem",
                textAlign: { xs: "center", sm: "left" },
              }}
              variant="h4"
              component="div"
            >
              Latest Articles
            </Typography>

            {/* Cards */}

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              {latestArticles.map((article) => (
                <Box key={article.id}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      minHeight: 465,
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={article.title}
                      height="200"
                      image={article.image}
                    />
                    <CardContent
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "space-around",
                        rowGap: "1rem",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {article.author}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
