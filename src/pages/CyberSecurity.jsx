import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowForward, CheckCircleOutline, Close } from "@mui/icons-material";
import { Banner, Footer } from "../components/home";
import DrawerComponent from "../components/global/DrawerComponent";
import ContactForm from "../components/home/ContactForm";
import JoinUsForm from "../components/home/JoinUsForm";
import securityServices from "../data/securityData.jsx";

/* ── Single interactive service card ── */
function ServiceCard({ service, isActive, onToggle, onNavigate }) {
  return (
    <Box
      onClick={isActive ? undefined : onToggle}
      sx={{
        position: "relative",
        border: isActive
          ? "1px solid #FFBD1F"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: isActive ? "default" : "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isActive
          ? "0 0 30px rgba(255,189,31,0.12)"
          : "none",
        "&:hover": !isActive
          ? {
              borderColor: "rgba(255,189,31,0.45)",
              boxShadow: "0 0 20px rgba(255,189,31,0.08)",
            }
          : {},
      }}
    >
      {/* Collapsed header — always visible */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: { xs: "20px", md: "24px 28px" },
          backgroundColor: isActive
            ? "rgba(255,189,31,0.04)"
            : "rgba(255,255,255,0.02)",
          transition: "background-color 0.3s ease",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            sx={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              backgroundColor: isActive
                ? "rgba(255,189,31,0.12)"
                : "rgba(255,255,255,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background-color 0.3s ease",
            }}
          >
            {service.icon}
          </Box>
          <Box>
            <Typography
              variant="normal"
              sx={{
                fontSize: { md: "16px", xs: "14px" },
                fontWeight: 600,
                color: isActive ? "#FFBD1F" : "primary.main",
                transition: "color 0.3s ease",
                lineHeight: 1.3,
              }}
            >
              {service.title}
            </Typography>
            {!isActive && (
              <Typography
                variant="normal"
                sx={{
                  fontSize: "12px",
                  color: "primary.light",
                  mt: "3px",
                  lineHeight: 1.4,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {service.tagline}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Toggle icon */}
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
            transition: "all 0.3s ease",
            color: isActive ? "#FFBD1F" : "rgba(255,255,255,0.4)",
            "&:hover": { borderColor: "#FFBD1F", color: "#FFBD1F" },
          }}
        >
          {isActive ? (
            <Close sx={{ fontSize: "14px" }} />
          ) : (
            <ArrowForward sx={{ fontSize: "14px", transform: "rotate(45deg)" }} />
          )}
        </Box>
      </Box>

      {/* Expanded panel */}
      <Box
        sx={{
          maxHeight: isActive ? "600px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Box
          sx={{
            px: { xs: "20px", md: "28px" },
            pb: "28px",
            pt: "4px",
            borderTop: "1px solid rgba(255,189,31,0.12)",
          }}
        >
          {/* Description */}
          <Typography
            variant="normal"
            sx={{
              fontSize: { md: "14px", xs: "13px" },
              color: "primary.light",
              lineHeight: 1.8,
              mt: "16px",
            }}
          >
            {service.description}
          </Typography>

          {/* First 4 what-we-do items */}
          <Box sx={{ mt: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {service.what.slice(0, 4).map((item) => (
              <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircleOutline
                  sx={{ color: "#FFBD1F", fontSize: "15px", mt: "2px", flexShrink: 0 }}
                />
                <Typography
                  variant="normal"
                  sx={{ fontSize: { md: "13px", xs: "12px" }, color: "primary.main", lineHeight: 1.5 }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Frameworks row */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mt: "18px" }}>
            {service.frameworks.map((fw) => (
              <Box
                key={fw}
                sx={{
                  px: "10px",
                  py: "3px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,189,31,0.3)",
                  backgroundColor: "rgba(255,189,31,0.05)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {fw}
              </Box>
            ))}
          </Box>

          {/* CTA */}
          <Button
            variant="primary"
            onClick={onNavigate}
            sx={{
              mt: "22px",
              fontSize: "13px",
              px: "22px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Explore {service.title}
            <ArrowForward sx={{ fontSize: "14px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function CyberSecurity() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [activeSlug, setActiveSlug] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (slug) =>
    setActiveSlug((prev) => (prev === slug ? null : slug));

  // Split into two columns for desktop: 6 left, 5 right
  const leftCol = securityServices.slice(0, 6);
  const rightCol = securityServices.slice(6);

  return (
    <Box sx={{ overflowX: "hidden", width: { xs: "100vw", md: "calc(100vw - 20px)" } }}>
      <Banner
        setOpenDrawer={setOpenDrawer}
        setOpenDrawer2={setOpenDrawer2}
        openDrawer={openDrawer}
        openDrawer2={openDrawer2}
        showStats={false}
        title="Simulate the Threat."
        textsToChange={["Strengthen the Defense."]}
      />

      {/* ── SERVICES SECTION ── */}
      <Box id="services-grid" sx={{ mt: "100px", mb: "100px" }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: "10px", lg: "90px" } }}>

            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Typography variant="heading">Security Services</Typography>
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
                  sx={{ color: "secondary.main", fontSize: { md: "54px", xs: "24px" }, lineHeight: "3rem" }}
                >
                  Full-spectrum security you deserve
                </Typography>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "34%" } }}>
                <Typography variant="normal" sx={{ fontSize: { md: "15px", xs: "14px" }, color: "primary.light" }}>
                  Click any discipline to preview scope, capabilities, and frameworks — then dive deeper.
                </Typography>
              </Box>
            </Box>

            {/* Two-column accordion on desktop, single column on mobile */}
            <Box
              sx={{
                mt: "50px",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: "12px",
                alignItems: "start",
              }}
            >
              {/* Left column */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {leftCol.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    isActive={activeSlug === service.slug}
                    onToggle={() => toggle(service.slug)}
                    onNavigate={() => navigate(`/security/${service.slug}`)}
                  />
                ))}
              </Box>

              {/* Right column */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {rightCol.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    isActive={activeSlug === service.slug}
                    onToggle={() => toggle(service.slug)}
                    onNavigate={() => navigate(`/security/${service.slug}`)}
                  />
                ))}
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

      <Footer
        setOpenDrawer={setOpenDrawer}
        setOpenDrawer2={setOpenDrawer2}
        openDrawer={openDrawer}
        openDrawer2={openDrawer2}
      />

      <DrawerComponent open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <ContactForm />
      </DrawerComponent>
      <DrawerComponent open={openDrawer2} onClose={() => setOpenDrawer2(false)}>
        <JoinUsForm />
      </DrawerComponent>
    </Box>
  );
}

export default CyberSecurity;
