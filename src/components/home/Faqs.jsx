import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Accordian from "../global/Accordian";

function Faqs() {
  const items = [
    {
      title: "What is your hourly rate?",
      description:
        "My hourly rate is $100. I also offer fixed-price packages for specific services. Please contact me for more information.",
    },
    {
      title: "What is your availability?",
      description:
        "I'm currently available for new projects. My schedule is flexible, and I can adjust it to meet your needs.",
    },
    {
      title: "Do you offer discounts for long-term projects?",
      description:
        "Yes, I offer discounts for long-term projects. Please contact me to discuss your project requirements and budget.",
    },
    {
      title: "What is your refund policy?",
      description:
        "I offer a 100% money-back guarantee if you're not satisfied with my work. Your satisfaction is my top priority.",
    },
    {
      title: "Do you provide ongoing support after the project is completed?",
      description:
        "Yes, I provide ongoing support and maintenance services after the project is completed. I'm here to help you succeed.",
    },
  ];

  return (
    <Box
      id="faq"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "primary.background",
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
              mb: "40px",
            }}
          >
            <Typography variant="heading">Insights</Typography>
            <Typography
              variant="normal"
              sx={{
                // color: "secondary.main",
                fontSize: { md: "54px", xs: "24px" },
                lineHeight: "3rem",
                textAlign: "center",
              }}
            >
              Frequently Asked
              <br />
              Questions
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "80%" },
              margin: "auto",
            }}
          >
            <Accordian items={items} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Faqs;
