import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Marquee from "react-marquee-slider";

const serviceCard = (service, index) => {
  return (
    <Box
      key={index}
      sx={{
        backgroundColor: "secondary.background",
        borderRadius: "10px",
        padding: "10px 20px",
        margin: "10px",
      }}
    >
      <Typography key={index} variant="normal" sx={{}}>
        {service}
      </Typography>
    </Box>
  );
};

function Services() {
  const servicesData = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Content Creation",
    "Graphic Design",
    "Cloud Services",
    "IT Consulting",
    "Cybersecurity",
    "Data Analysis",
    "E-commerce Solutions",
    "Blockchain Development",
    "AI & Machine Learning",
    "AR/VR Development",
    "Game Development",
    "DevOps Services",
    "CRM Solutions",
    "ERP Solutions",
    "IoT Development",
    "Software Testing",
    "Technical Support",
  ];

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            py: { xs: "10px", md: "30px" },
            px: { xs: "10px", lg: "90px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography variant="heading">Services</Typography>
            <Typography
              variant="normal"
              sx={{
                // color: "secondary.main",
                fontSize: { md: "54px", xs: "24px" },
                lineHeight: "3rem",
                textAlign: "center",
              }}
            >
              All you want,
              <br />
              delivered on time
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: "40px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "70%" },
                borderRadius: "10%", // Rounded effect
                overflow: "hidden", // Ensure content is clipped
                position: "relative", // Needed for absolute positioning of the gradient
              }}
            >
              {/* Gradient Overlay to Create the Smooth Blur Effect for Black Background */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1, // Place it above the marquee
                  background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1))`,
                  pointerEvents: "none", // Allow interactions with underlying elements
                }}
              />

              {/* Marquee Content */}
              <Marquee
                velocity={5}
                minScale={0.7}
                direction="ltr"
                resetAfterTries={200}
                style={{ zIndex: 0 }}
              >
                {servicesData.map((service, index) =>
                  serviceCard(service, index)
                )}
              </Marquee>
              <Marquee
                velocity={5}
                minScale={0.7}
                direction="rtl"
                resetAfterTries={200}
                style={{ zIndex: 0 }}
              >
                {servicesData.map((service, index) =>
                  serviceCard(service, index)
                )}
              </Marquee>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
