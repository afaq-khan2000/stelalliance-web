import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowForward, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import servicesData from "../../data/servicesData";

function ServicePracticeCard({ service, isActive, onToggle, onNavigate }) {
  return (
    <Box
      onClick={isActive ? undefined : onToggle}
      sx={{
        border: isActive ? "1px solid #FFBD1F" : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: isActive ? "default" : "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isActive ? "0 0 30px rgba(255,189,31,0.10)" : "none",
        "&:hover": !isActive
          ? { borderColor: "rgba(255,189,31,0.4)", boxShadow: "0 0 18px rgba(255,189,31,0.07)" }
          : {},
      }}
    >
      {/* Header row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: { xs: "22px 20px", md: "30px 36px" },
          backgroundColor: isActive ? "rgba(255,189,31,0.04)" : "rgba(255,255,255,0.02)",
          transition: "background-color 0.3s ease",
        }}
      >
        <Box>
          <Typography
            variant="normal"
            sx={{
              fontSize: { md: "20px", xs: "16px" },
              fontWeight: 600,
              color: isActive ? "#FFBD1F" : "primary.main",
              transition: "color 0.3s ease",
              lineHeight: 1.3,
              display: "block",
            }}
          >
            {service.title}
          </Typography>
          {!isActive && (
            <Typography
              variant="normal"
              sx={{ fontSize: { md: "14px", xs: "13px" }, color: "primary.light", mt: "8px", lineHeight: 1.5, display: "block" }}
            >
              {service.tagline}
            </Typography>
          )}
        </Box>
        <Box
          onClick={isActive ? onToggle : undefined}
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid",
            borderColor: isActive ? "#FFBD1F" : "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
            color: isActive ? "#FFBD1F" : "rgba(255,255,255,0.4)",
            transition: "all 0.3s",
            "&:hover": { borderColor: "#FFBD1F", color: "#FFBD1F" },
          }}
        >
          {isActive
            ? <Close sx={{ fontSize: "14px" }} />
            : <ArrowForward sx={{ fontSize: "14px", transform: "rotate(45deg)" }} />}
        </Box>
      </Box>

      {/* Expanded body */}
      <Box
        sx={{
          maxHeight: isActive ? "700px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <Box sx={{ px: { xs: "20px", md: "28px" }, pb: "28px", pt: "4px", borderTop: "1px solid rgba(255,189,31,0.12)" }}>
          <Typography
            variant="normal"
            sx={{ fontSize: { md: "14px", xs: "13px" }, color: "primary.light", lineHeight: 1.85, mt: "16px" }}
          >
            {service.description}
          </Typography>

          {/* Highlights */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: "18px" }}>
            {service.highlights.map((h) => (
              <Box
                key={h}
                sx={{
                  px: "10px", py: "3px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,189,31,0.3)",
                  backgroundColor: "rgba(255,189,31,0.05)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {h}
              </Box>
            ))}
          </Box>

          <Button
            variant="primary"
            onClick={onNavigate}
            sx={{ mt: "20px", fontSize: "13px", px: "20px", height: "38px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            {service.ctaLabel || `Explore ${service.title}`}
            <ArrowForward sx={{ fontSize: "14px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Services() {
  const navigate = useNavigate();
  const [activeSlug, setActiveSlug] = useState(null);

  const toggle = (slug) => setActiveSlug((prev) => (prev === slug ? null : slug));

  return (
    <Box
      id="services"
      sx={{ position: "relative", display: "flex", alignItems: "center", mt: "100px" }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Typography variant="heading">Services</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "flex-end" },
              textAlign: { xs: "center", md: "left" },
              mt: "40px",
              flexWrap: "wrap",
              gap: { xs: "20px", md: "0" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                variant="normal"
                sx={{ color: "secondary.main", fontSize: { md: "54px", xs: "24px" }, lineHeight: "3rem" }}
              >
                All you want,
                <br />
                delivered on time
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "34%" } }}>
              <Typography variant="normal" sx={{ fontSize: { md: "15px", xs: "14px" }, color: "primary.light" }}>
                Software engineering, cybersecurity, and education innovation — click any practice area to learn more.
              </Typography>
            </Box>
          </Box>

          {/* Practice area cards */}
          <Box
            sx={{
              mt: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {servicesData.map((service) => (
              <ServicePracticeCard
                key={service.slug}
                service={service}
                isActive={activeSlug === service.slug}
                onToggle={() => toggle(service.slug)}
                onNavigate={() =>
                  service.ctaLink
                    ? navigate(service.ctaLink)
                    : navigate(`/services/${service.slug}`)
                }
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
