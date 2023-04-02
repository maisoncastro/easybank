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
} from "@mui/material";

export default function Home() {
  const latestArticles = [
    {
      id: 1,
      title: "Receive money in any currency with no fees",
      author: "By Claire Robinson",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      image: "/image-currency.jpg",
    },
    {
      id: 2,
      title: "Treat yourself without worrying about money",
      author: "By Wilson Hutton",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
      image: "/image-restaurant.jpg",
    },
    {
      id: 3,
      title: "Take your Easybank card wherever you go",
      author: "By Wilson Hutton",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      image: "/image-plane.jpg",
    },
    {
      id: 4,
      author: " By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work, by the whole team, we’re excited to launch our closed beta.",
      image: "/image-confetti.jpg",
    },
  ];

  const buttonSX = {
    textTransform: "none",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: "transparent",
    },
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
          overflowX: "hidden",
        }}
      >
        <Container
          sx={{
            height: "90svh",

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
      </Box>

      {/* Why  */}

      <Box sx={{ width: "100%", backgroundColor: "#f9f9f9", py: "10rem" }}>
        <Container
          sx={{
            width: "100%",
            backgroundColor: "#f9f9f9",
          }}
        >
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
              }}
            >
              We leverage Open Banking to turn your bank account into your
              financial hub.
              <br /> Control your finances like never before.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1.6rem",
              }}
            >
              <Image
                src="/icon-online.svg"
                alt="online"
                width={80}
                height={80}
              />
              <Typography variant="h6" component="div">
                Online Banking
              </Typography>
              <Typography
                sx={{
                  color: "#7c7c7c",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                }}
                component="div"
              >
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1.6rem",
              }}
            >
              <Image
                src="/icon-budgeting.svg"
                alt="budgeting"
                width={80}
                height={80}
              />
              <Typography variant="h6" component="div">
                Simple Bugeting
              </Typography>
              <Typography
                sx={{
                  color: "#7c7c7c",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                }}
                component="div"
              >
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1.6rem",
              }}
            >
              <Image
                src="/icon-onboarding.svg"
                alt="onboarding"
                width={80}
                height={80}
              />
              <Typography variant="h6" component="div">
                Fast Onboarding
              </Typography>
              <Typography
                sx={{
                  color: "#7c7c7c",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                }}
                component="div"
              >
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1.6rem",
              }}
            >
              <Image src="/icon-api.svg" alt="api" width={80} height={80} />
              <Typography variant="h6" component="div">
                Open API
              </Typography>
              <Typography
                sx={{
                  color: "#7c7c7c",

                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                }}
                component="div"
              >
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Articles  */}
      <Box sx={{ width: "100%", backgroundColor: "#fff", py: "10rem" }}>
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
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              {latestArticles.map((article) => (
                <Box key={article.id}>
                  <Card
                    sx={{
                      maxWidth: 300,
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

      {/* Footer  */}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#2d314e",

          height: "13rem",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

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
                width: "100%",
              }}
            >
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={139}
                  height={20}
                />
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
                    src="/icon-facebook.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-twitter.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-youtube.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-instagram.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icon-pinterest.svg"
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
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Link href="/">
                <Button sx={buttonSX}>About Us</Button>
              </Link>
              <Link href="/">
                <Button sx={buttonSX}>Contact</Button>
              </Link>
              <Link href="/">
                <Button sx={buttonSX}>Blog</Button>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Link href="/">
                <Button sx={buttonSX}>Careers</Button>
              </Link>
              <Link href="/">
                <Button sx={buttonSX}>Support</Button>
              </Link>
              <Link href="/">
                <Button sx={buttonSX}>Privacy Policy</Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
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
                mt: "2rem",
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
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  mt: "1rem",
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
}
