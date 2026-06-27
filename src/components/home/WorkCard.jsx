import React, { useState } from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function WorkCard({ work }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const isLogoCard = Boolean(work.logoImage);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate(`/portfolio/${work.id}`)}
        sx={{
          position: "relative",
          height: { xs: "260px", md: "300px" },
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          border: "1px solid",
          borderColor: hovered ? "#FFBD1F" : "rgba(255,255,255,0.08)",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 48px rgba(255, 189, 31, 0.15), 0 8px 24px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.3)",
          backgroundColor: isLogoCard ? "#0d0d0d" : "transparent",
        }}
      >
        {isLogoCard ? (
          /* ── LOGO CARD ── */
          <>
            {/* Background noise/grain texture */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Centered logo badge */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: hovered
                  ? "translate(-50%, -58%) scale(1.06)"
                  : "translate(-50%, -58%) scale(1)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                zIndex: 2,
                width: "62%",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: hovered
                  ? "0 16px 40px rgba(255,189,31,0.15), 0 4px 16px rgba(0,0,0,0.6)"
                  : "none",
              }}
            >
              <Box
                component="img"
                src={work.logoImage}
                alt={`${work.title} logo`}
                sx={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Bottom gradient */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(to top, #0d0d0d 50%, transparent 100%)",
                zIndex: 3,
              }}
            />
          </>
        ) : (
          /* ── COVER IMAGE CARD ── */
          <>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${work.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: hovered ? "grayscale(0%) brightness(0.75)" : "grayscale(40%) brightness(0.5)",
                transition: "all 0.4s ease",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
            background: hovered
              ? "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.88) 100%)",
                transition: "all 0.4s ease",
              }}
            />
          </>
        )}

        {/* Category chip — top left */}
        <Box sx={{ position: "absolute", top: "16px", left: "16px", zIndex: 10 }}>
          <Chip
            label={work.category}
            size="small"
            sx={{
              backgroundColor: "rgba(255,189,31,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,189,31,0.4)",
              color: "#FFBD1F",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.5px",
              height: "26px",
            }}
          />
        </Box>

        {/* Arrow icon — top right */}
        <Box
          sx={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 10,
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hovered ? "#FFBD1F" : "rgba(255,255,255,0.05)",
            transition: "all 0.3s ease",
            transform: hovered ? "rotate(0deg)" : "rotate(-45deg)",
          }}
        >
          <ArrowOutwardIcon
            sx={{
              fontSize: "15px",
              color: hovered ? "#000" : "#fff",
              transition: "color 0.3s ease",
            }}
          />
        </Box>

        {/* Bottom content */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            p: "16px",
          }}
        >
          {/* Tech stack pills — visible on hover */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              mb: "8px",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.35s ease",
            }}
          >
            {work.techStack.slice(0, 3).map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: "7px",
                  py: "3px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  {tech}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "17px", md: "18px" },
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: 1.2,
              mb: "5px",
            }}
          >
            {work.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              lineHeight: 1.4,
              transition: "color 0.3s ease",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {work.subtitle}
          </Typography>

          <Box
            sx={{
              mt: "10px",
              height: "1px",
              backgroundColor: "#FFBD1F",
              width: hovered ? "100%" : "36px",
              transition: "width 0.4s ease",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default WorkCard;
