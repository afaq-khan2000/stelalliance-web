import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { bannerBg, Logo } from "../../assets/images";
import { ArrowForwardIos } from "@mui/icons-material";
import DrawerComponent from "../global/DrawerComponent";
import ContactForm from "./ContactForm";
import JoinUsForm from "./JoinUsForm";

function Banner() {
  const scrollToContact = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const navLinks = [
    { id: "our-story", title: "Our Story" },
    { id: "our-work", title: "Our Work" },
    { id: "services", title: "Services" },
    { id: "about-us", title: "About Us" },
    { id: "faq", title: "FAQ" },
    { id: "join-us", title: "Join Us" },
  ];

  const stats = [
    { title: "Client Projects", value: "20+" },
    { title: "Lines of Code", value: "100k+" },
    { title: "Successfull Deliveries", value: "50+" },
    { title: "Raised by Partners", value: "$260+" },
  ];

  const textsToChange = ["Innovate", "Ideate", "Grow"];
  const [textIndex, setTextIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textsToChange.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        // position: "relative",
        height: "100vh",
        display: "flex",
      }}
      data-aos="fade-up"
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5)",
            zIndex: -9999,
          }}
        />
        <Box
          sx={{
            py: { xs: "10px", md: "30px" },
            px: { xs: "10px", md: "30px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                width: { xs: "50px", md: "50px" },
                height: "auto",
                objectFit: "contain",
                marginRight: "20px",
              }}
            />

            {/* NAVIGATION LINKS */}
            <Box
              sx={{
                gap: "40px",
                mt: { xs: "20px", md: 0 },
                display: { xs: "none", md: "flex" },
              }}
            >
              {navLinks.map((link) => (
                <Typography
                  key={link.id}
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "12px", md: "14px" },
                    fontWeight: 400,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                  // onClick={() => scrollToContact(link.id)}
                  onClick={() => {
                    if (link.id === "join-us") {
                      setOpenDrawer2(true);
                    } else {
                      scrollToContact(link.id);
                    }
                  }}
                >
                  {link.title}
                </Typography>
              ))}
            </Box>
            <Button
              variant="primary"
              sx={{
                fontSize: "14px",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setOpenDrawer(true)}
            >
              CONTACT ME
              <ArrowForwardIos sx={{ fontSize: "14px" }} />
            </Button>
          </Box>

          {/* TEXT */}
          {/* Stelalliance helps you Innovate/ Ideate/ Grow */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            <Typography
              variant="normal"
              sx={{
                color: "secondary.main",
                fontSize: { md: "58px", xs: "24px" },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Stelalliance helps you
            </Typography>
            <Typography
              variant="normal"
              sx={{
                color: "primary.main",
                fontSize: { md: "80px", xs: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                transition: "all 0.3s",
                ml: { xs: 0, md: "500px" },
              }}
            >
              {textsToChange[textIndex]}
            </Typography>

            {/* STATS */}

            <Grid
              container
              spacing={2}
              sx={{
                mt: { md: "60px", xs: "30px" }, // Adjust margin top based on screen size
              }}
            >
              {stats.map((stat) => (
                <Grid item xs={6} md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Typography
                      variant="normal"
                      sx={{
                        color: "secondary.main",
                        fontSize: { sm: "40px", xs: "20px" },
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{
                        color: "primary.main",
                        fontSize: { sm: "24px", xs: "10px" },
                        fontWeight: 400,
                      }}
                    >
                      {stat.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <DrawerComponent open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <ContactForm />
        </DrawerComponent>
        <DrawerComponent
          open={openDrawer2}
          onClose={() => setOpenDrawer2(false)}
        >
          <JoinUsForm />
        </DrawerComponent>
      </Container>
    </Box>
  );
}

export default Banner;
