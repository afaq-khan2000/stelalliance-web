import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function WorkCard({ work, key, setIsHovered, isHovered }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={work.id}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)), url(${work.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          overflow: "hidden",
          cursor: "pointer",
          height: "500px",
          transition: "all 0.3s ease",
          filter: isHovered.index === work.id ? "grayscale(0)" : "grayscale(1)",
          zIndex: -999,
          "&:hover": {
            transform: "scale(0.95)",
          },
        }}
        onMouseEnter={() => setIsHovered({ index: work.id, flag: true })}
        onMouseLeave={() => setIsHovered({ index: null, flag: false })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "absolute",
            bottom: "10px",
            left: "10px",
            zIndex: 999,
          }}
        >
          <Typography
            variant="normal"
            sx={{
              fontSize: { md: "28px", xs: "18px" },
            }}
          >
            {work.title}
          </Typography>
          <Typography
            variant="normal"
            sx={{
              fontSize: { md: "16px", xs: "14px" },
              color: "secondary.main",
            }}
          >
            {work.category}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default WorkCard;
