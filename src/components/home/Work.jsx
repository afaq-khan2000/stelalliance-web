import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
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
} from "../../assets/images";
import WorkCard from "./WorkCard";

function Work() {
  const [isHovered, setIsHovered] = useState({
    index: null,
    flag: false,
  });

  const workData = [
    {
      id: 1,
      title: "Afrock",
      description:
        "A dynamic platform for African-inspired fashion, built with React and Node.js. Features include custom shopping carts, secure payments, and seamless user authentication.",
      category: "E-Commerce",
      hashtags: ["#React", "#NodeJS", "#Fashion", "#Ecommerce"],
      image: Case1,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "6 months",
      completionDate: "June 2023",
    },
    {
      id: 2,
      title: "FitPro",
      description:
        "A fitness app for tracking workouts and meals, integrating wearables and real-time cloud syncing. Built with React Native for cross-platform compatibility.",
      category: "Fitness",
      hashtags: ["#ReactNative", "#Health", "#Fitness", "#Mobile"],
      image: Case2,
      techStack: ["React Native", "Firebase", "Google Fit API"],
      duration: "4 months",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "InsightX",
      description:
        "An advanced data visualization platform for predictive analytics. Uses Python and machine learning algorithms to analyze large datasets.",
      category: "Analytics",
      hashtags: ["#Python", "#DataScience", "#ML", "#Analytics"],
      image: Case3,
      techStack: ["Python", "Pandas", "Scikit-learn", "Dash"],
      duration: "8 months",
      completionDate: "December 2022",
    },
    {
      id: 4,
      title: "ChatAI",
      description:
        "A smart AI chatbot for automating customer support with machine learning. Integrated with Slack and WhatsApp for real-time interactions.",
      category: "AI",
      hashtags: ["#AI", "#Chatbot", "#Python", "#NLP"],
      image: Case4,
      techStack: ["Python", "TensorFlow", "Dialogflow", "Twilio"],
      duration: "5 months",
      completionDate: "July 2023",
    },
    {
      id: 5,
      title: "Homematchx",
      description:
        "A unified design system for a SaaS platform, providing consistency across web and mobile interfaces with reusable components.",
      category: "UI/UX",
      hashtags: ["#UI", "#UX", "#DesignSystem", "#Figma"],
      image: Case5,
      techStack: ["Figma", "Sketch", "Adobe XD"],
      duration: "3 months",
      completionDate: "May 2023",
    },
    {
      id: 6,
      title: "RealConnect",
      description:
        "A real-time messaging API supporting web sockets for instant communication, with a focus on scalability and secure data transfer.",
      category: "Messaging",
      hashtags: ["#NodeJS", "#Express", "#API", "#WebSockets"],
      image: Case6,
      techStack: ["Node.js", "Express", "WebSockets", "Redis"],
      duration: "7 months",
      completionDate: "August 2023",
    },
  ];

  return (
    <Box
      id="our-work"
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
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="heading">Our Work</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "flex-end" },
              textAlign: { xs: "center", md: "left" },
              mt: "40px",
              flexWrap: "wrap",
              gap: { xs: "20px", md: "0px" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                variant="normal"
                sx={{
                  color: "secondary.main",
                  fontSize: { md: "54px", xs: "24px" },
                  lineHeight: "3rem",
                }}
              >
                Exceptional work you deserve
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "30%" } }}>
              <Typography
                variant="normal"
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                }}
              >
                From tech startups to healthcare giants, e-commerce pioneers to
                edtech, we've left our mark on diverse domains
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ mt: "50px" }}>
            {workData.map((work) => (
              <WorkCard
                work={work}
                key={work.id}
                setIsHovered={setIsHovered}
                isHovered={isHovered}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Work;
