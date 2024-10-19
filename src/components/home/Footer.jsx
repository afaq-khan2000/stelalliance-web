import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./styles/styles.css";
// import WorkCard from "./WorkCard";
import {
  Case1,
  Case2,
  Case3,
  Case4,
  Case5,
  Case6,
  Case7,
  Case8,
  Case9,
  FooterBG,
  FooterLogo,
} from "../../assets/images";
import WorkCard from "./WorkCard";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
} from "@mui/icons-material";

function Footer({ setOpenDrawer, setOpenDrawer2, openDrawer, openDrawer2 }) {
  const navLinks = [
    { id: "our-story", title: "Our Mission" },
    { id: "our-work", title: "Portfolio" },
    { id: "services", title: "Services" },
    { id: "about-us", title: "About Us" },
    { id: "reviews", title: "Reviews" },
    { id: "join-us", title: "Join Us" },
  ];

  const contactLinks = [
    {
      icon: (
        <Mail
          sx={{
            color: "secondary.main",
            fontSize: { sm: "24px", xs: "24px" },
          }}
        />
      ),
      title: "info@stelalliance.com",
    },
    {
      icon: (
        <Phone
          sx={{
            color: "secondary.main",
            fontSize: { sm: "24px", xs: "24px" },
          }}
        />
      ),
      title: "+923237426337",
    },
    {
      icon: (
        <LocationOn
          sx={{
            color: "secondary.main",
            fontSize: { sm: "24px", xs: "24px" },
          }}
        />
      ),
      title:
        "  NASTP-Alpha, Old Airport Rd, Old Chaklala Cantt Rawalpindi - 46000",
    },
  ];

  const scrollToContact = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const [filter, setFilter] = useState("grayscale(100%)");

  // after every 1 second if filter is grayscale(100%) then set it to none and vice versa
  useEffect(() => {
    const interval = setInterval(() => {
      if (filter === "grayscale(100%)") {
        setFilter("none");
      } else {
        setFilter("grayscale(100%)");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [filter]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "secondary.background",
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            py: { xs: "10px", md: "30px" },
            px: { xs: "10px", md: "30px" },
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  component={"img"}
                  src={FooterLogo}
                  alt="footer-bg"
                  sx={{ width: "200px", height: "auto", filter: filter }}
                />
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    mt: 2,
                    fontSize: { xs: "30px", md: "40px" },
                    fontWeight: 400,
                  }}
                >
                  Send us a message
                </Typography>
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    mt: 2,
                    fontSize: { sm: "14px", xs: "14px" },
                    fontWeight: 400,
                  }}
                >
                  Feel free to reach out through contact form or find our
                  contact information below. Your feedback, questions, and
                  suggestions are important to us as we strive to provide
                  exceptional service to you all.
                </Typography>
                {contactLinks.map((link, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mt: 2,
                    }}
                  >
                    {link.icon}
                    <Typography
                      variant="normal"
                      sx={{
                        color: "primary.main",
                        fontSize: { sm: "14px", xs: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={1}></Grid>

            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "30px", md: "40px" },
                    fontWeight: 400,
                    filter: filter,
                  }}
                >
                  Let's Connect
                </Typography>
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    fontSize: { sm: "14px", xs: "14px" },
                    fontWeight: 400,
                  }}
                >
                  Ready to collaborate? Let's connect and discuss your project.
                </Typography>
                <Button
                  variant="primary"
                  onClick={() => setOpenDrawer(true)}
                  sx={{
                    borderRadius: "10px 40px 10px 10px",
                    width: "200px",
                    fontSize: "16px",
                    fontWeight: 400,
                    height: "40px",
                  }}
                >
                  Become a Partner
                </Button>
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    fontSize: { sm: "14px", xs: "14px" },
                    fontWeight: 400,
                  }}
                >
                  Connect with us on social media
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Facebook
                    sx={{
                      color: "secondary.main",
                      fontSize: { sm: "24px", xs: "24px" },
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/Stelalliance/",
                        "_blank"
                      )
                    }
                  />
                  <Instagram
                    sx={{
                      color: "secondary.main",
                      fontSize: { sm: "24px", xs: "24px" },
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/stelalliance/",
                        "_blank"
                      )
                    }
                  />
                  <LinkedIn
                    sx={{
                      color: "secondary.main",
                      fontSize: { sm: "24px", xs: "24px" },
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/stelalliance/",
                        "_blank"
                      )
                    }
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={1}></Grid>

            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "30px", md: "40px" },
                    fontWeight: 400,
                    filter: filter,
                  }}
                >
                  Quick Links
                </Typography>
                <Grid container spacing={2}>
                  {navLinks.map((link, index) => (
                    <Grid item xs={6} key={index}>
                      <Typography
                        variant="normal"
                        sx={{
                          color: "primary.main",
                          fontSize: "14px",
                          fontWeight: 400,
                          cursor: "pointer",
                        }}
                        onClick={() => scrollToContact(link.id)}
                      >
                        {link.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
