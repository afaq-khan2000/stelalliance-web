import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./styles/styles.css";
// import WorkCard from "./WorkCard";
import { Case1, Case2, Case3 } from "../../assets/images";
import WorkCard from "./WorkCard";
import { useNavigate } from "react-router-dom";

function Work({ showAll = false }) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState({
    index: null,
    flag: false,
  });

  const workData = [
    {
      id: 1,
      title: "Stellar Scholar",
      description: "A game based application that targets STEM based learning focused on space and aerospace sciences.",
      category: "Ed-tech",
      image: Case1,
      techStack: ["Unity", "Node.js", "React", "Python"],
      duration: "14 months",
      completionDate: "Ongoing",
    },
    {
      id: 2,
      title: "DealerPro",
      description: "SaaS for UAE car showrooms, offering lead generation via web scraping and a dashboard for managing vehicle listings and potential buyers.",
      category: "SaaS",
      image: Case2,
      techStack: ["React Native", "Firebase", "Google Fit API"],
      duration: "4 months",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "Polaris AI",
      description: "Leading the future of intelligent collaboration with multi-agent systems and cutting-edge tools.",
      category: "Artificial Intelligence",
      hashtags: ["#Python", "#DataScience", "#ML", "#Analytics"],
      image: Case3,
      techStack: ["Python", "Langchain", "OpenAI", "Docker"],
      duration: "24 months",
      completionDate: "Ongoing",
    },

    // show more

    {
      id: 1,
      title: "Stellar Scholar",
      description: "A game based application that targets STEM based learning focused on space and aerospace sciences.",
      category: "Ed-tech",
      image: Case1,
      techStack: ["Unity", "Node.js", "React", "Python"],
      duration: "14 months",
      completionDate: "Ongoing",
    },
    {
      id: 2,
      title: "DealerPro",
      description: "SaaS for UAE car showrooms, offering lead generation via web scraping and a dashboard for managing vehicle listings and potential buyers.",
      category: "SaaS",
      image: Case2,
      techStack: ["React Native", "Firebase", "Google Fit API"],
      duration: "4 months",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "Polaris AI",
      description: "Leading the future of intelligent collaboration with multi-agent systems and cutting-edge tools.",
      category: "Artificial Intelligence",
      hashtags: ["#Python", "#DataScience", "#ML", "#Analytics"],
      image: Case3,
      techStack: ["Python", "Langchain", "OpenAI", "Docker"],
      duration: "24 months",
      completionDate: "Ongoing",
    },
    {
      id: 1,
      title: "Stellar Scholar",
      description: "A game based application that targets STEM based learning focused on space and aerospace sciences.",
      category: "Ed-tech",
      image: Case1,
      techStack: ["Unity", "Node.js", "React", "Python"],
      duration: "14 months",
      completionDate: "Ongoing",
    },
    {
      id: 2,
      title: "DealerPro",
      description: "SaaS for UAE car showrooms, offering lead generation via web scraping and a dashboard for managing vehicle listings and potential buyers.",
      category: "SaaS",
      image: Case2,
      techStack: ["React Native", "Firebase", "Google Fit API"],
      duration: "4 months",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "Polaris AI",
      description: "Leading the future of intelligent collaboration with multi-agent systems and cutting-edge tools.",
      category: "Artificial Intelligence",
      hashtags: ["#Python", "#DataScience", "#ML", "#Analytics"],
      image: Case3,
      techStack: ["Python", "Langchain", "OpenAI", "Docker"],
      duration: "24 months",
      completionDate: "Ongoing",
    },
  ];

  const sliceLimit = showAll ? workData.length : 3;

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
                From tech startups to healthcare giants, e-commerce pioneers to edtech, we've left our mark on diverse domains
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ mt: "50px" }}>
            {workData.slice(0, sliceLimit).map((work) => (
              <WorkCard work={work} key={work.id} setIsHovered={setIsHovered} isHovered={isHovered} />
            ))}
          </Grid>

          {!showAll && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography
                variant="normal"
                sx={{
                  // color: "secondary.main",
                  fontSize: { md: "54px", xs: "24px" },
                  lineHeight: "3rem",
                  textAlign: "center",
                }}
              >
                Hungry for more?
              </Typography>
              <Typography
                variant="heading"
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => navigate("/portfolio")}
              >
                Check out our portfolio
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Work;
