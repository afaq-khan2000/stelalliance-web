import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Accordian from "../global/Accordian";

function Faqs() {
  const items = [
    {
      title: "What types of software solutions do you provide?",
      description:
        "We offer a variety of software solutions, including web development, mobile app development, custom software development, and software-as-a-service (SaaS) products tailored to meet the unique needs of our clients.",
    },
    {
      title: "How do you ensure the quality and reliability of your software products?",
      description:
        "We follow a rigorous quality assurance process that includes thorough testing, continuous monitoring, and regular updates to ensure our software products are reliable, secure, and perform optimally.",
    },
    {
      title: "What is your process for starting a new project?",
      description:
        "Our process begins with a detailed consultation to understand your requirements, followed by project planning, design, development, testing, and deployment. We maintain open communication throughout the project to ensure your needs are met.",
    },
    {
      title: "Do you offer discounts for long-term projects?",
      description:
        "Yes, we offer discounts for long-term projects. Please contact us to discuss your project requirements and budget.",
    },
    {
      title: "Do you provide ongoing support after the project is completed?",
      description:
        "Yes, we provide ongoing support and maintenance services after the project is completed. We're here to help you succeed.",
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
