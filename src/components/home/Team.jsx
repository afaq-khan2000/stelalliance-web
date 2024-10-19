import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  Akbar,
  Amna,
  Basit,
  Haziq,
  Manahil,
  Rabia,
  Rimza,
  Shaiq,
  Shahmeer,
  Yalmaz,
  Zainab,
  Zarmeena,
  Zeeshan,
} from "../../assets/images";
import { Carousel } from "nuka-carousel";

const teamCard = (team, index) => {
  return (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="normal">{team.role}</Typography>
      <Box
        component="img"
        src={team.image}
        alt={team.name}
        sx={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          margin: "10px",
          borderTopRightRadius: "100px",
          borderTopLeftRadius: "20px",
          filter: "grayscale(100%)",
          transition: "all 0.3s",
          "&:hover": { filter: "grayscale(0%)" },
        }}
      />
      <Typography variant="normal">{team.name}</Typography>
    </Box>
  );
};

function Team() {
  const teamData = [
    { name: "Akbar", image: Akbar, role: "CEO" },
    { name: "Amna", image: Amna, role: "COO" },
    { name: "Basit", image: Basit, role: "CTO" },
    { name: "Haziq", image: Haziq, role: "CFO" },
    { name: "Manahil", image: Manahil, role: "CMO" },
    { name: "Rabia", image: Rabia, role: "CIO" },
    { name: "Rimza", image: Rimza, role: "CDO" },
    { name: "Shaiq", image: Shaiq, role: "CRO" },
    { name: "Shahmeer", image: Shahmeer, role: "CLO" },
    { name: "Yalmaz", image: Yalmaz, role: "CSO" },
    { name: "Zainab", image: Zainab, role: "CVO" },
    { name: "Zarmeena", image: Zarmeena, role: "CPO" },
    { name: "Zeeshan", image: Zeeshan, role: "CBO" },
  ];

  return (
    <Box
      id="about-us"
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
            <Typography variant="heading">Our Team</Typography>
            <Typography
              variant="normal"
              sx={{
                fontSize: { md: "54px", xs: "24px" },
                lineHeight: "3rem",
                textAlign: "center",
              }}
            >
              Meet the team
              <br />
              behind the magic
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
            {/* <Box
              sx={{
                width: "100%",
                borderRadius: "10%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                  background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1))`,
                  pointerEvents: "none",
                }}
              /> */}
            <Box sx={{ width: "100%" }}>
              <Carousel
                autoplay={true}
                showArrows={true}
                autoplayInterval={2000}
                wrapMode="wrap"
              >
                {teamData.map((team, index) => teamCard(team, index))}
              </Carousel>
            </Box>
            {/* </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Team;
