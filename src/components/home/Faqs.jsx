import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Accordian from "../global/Accordian";

function Faqs() {
  const items = [
    {
      title: "What does Stelalliance actually do?",
      description:
        "Stelalliance is a technology group operating at the intersection of software engineering, AI, cybersecurity, and education innovation. We build custom software and SaaS platforms, deliver managed cybersecurity services, and run Stellar Scholar — our space and STREAM education initiative active in schools across Pakistan.",
    },
    {
      title: "Where do you operate?",
      description:
        "We are headquartered at NASTP-Alpha, Islamabad, Pakistan, with active operations across Pakistan, Kuwait, Canada, and the wider GCC region.",
    },
    {
      title: "What is Stellar Scholar and Astrobot Academy?",
      description:
        "Stellar Scholar is our space and STREAM education initiative that ignites children's interest in rocketry and space sciences through game-based learning. Astrobot Academy is its delivery arm — deploying Robotics, AI, and Space Sciences modules in real classrooms, training teachers, and managing day-to-day delivery across partner school networks. We have a national MOU with Meezan School System targeting 1,000+ campuses, and affiliations with SUPARCO, NASA Space Apps, and UNESCO.",
    },
    {
      title: "What cybersecurity services do you offer?",
      description:
        "We are a Managed Security Service Provider (MSSP) covering the full security lifecycle: Offensive Security (red teaming, penetration testing, adversary simulation), Defensive Security (SOC design, threat hunting, incident response), Cloud & Application Security, Identity & Access Management, Data Security & Privacy, AI & Emerging Tech Security, OT & Critical Infrastructure, and Governance, Risk & Compliance.",
    },
    {
      title: "How do you approach software development?",
      description:
        "We engage as an embedded technical partner rather than a one-off vendor — from initial product strategy and MVP through to post-launch scaling. Security is built into the development lifecycle from day one, not bolted on after the fact. Our engineering foundation underpins everything the group builds.",
    },
    {
      title: "How do I get started or request an assessment?",
      description:
        "Reach out via the Contact Us form or email info@stelalliance.com. For cybersecurity engagements, we begin with a scoping call to align objectives, constraints, and the right engagement model for your environment. For software projects, we start with a discovery session to define requirements and roadmap.",
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
