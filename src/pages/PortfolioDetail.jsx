import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Chip, Container, Grid, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForwardIos, CalendarToday, CheckCircleOutline, ChevronLeft, ChevronRight, Close, Timer, ZoomIn } from "@mui/icons-material";
import workData from "../data/workData";
import { Logo } from "../assets/images";
import DrawerComponent from "../components/global/DrawerComponent";
import ContactForm from "../components/home/ContactForm";
import JoinUsForm from "../components/home/JoinUsForm";
import { Footer } from "../components/home";

function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const work = workData.find((w) => w.id === parseInt(id));

  const allScreenshots = work?.screenshots || (work?.screenshotUrl ? [work.screenshotUrl] : []);

  const openLightbox = (i) => setLightbox({ open: true, index: i });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prevImage = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + allScreenshots.length) % allScreenshots.length }));
  const nextImage = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % allScreenshots.length }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) {
    return (
      <Box
        sx={{
          backgroundColor: "#000",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography variant="normal" sx={{ fontSize: "24px" }}>
          Project not found.
        </Typography>
        <Button variant="primary" onClick={() => navigate("/portfolio")}>
          Back to Portfolio
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", overflowX: "hidden" }}>
      {/* NAV */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,189,31,0.15)",
          py: "14px",
          px: { xs: "20px", md: "60px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{ width: "40px", height: "auto", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <Button
          variant="primary"
          sx={{ fontSize: "13px", display: "flex", gap: "8px", alignItems: "center" }}
          onClick={() => setOpenDrawer(true)}
        >
          CONTACT US
          <ArrowForwardIos sx={{ fontSize: "12px" }} />
        </Button>
      </Box>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.95) 100%), url(${work.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          pt: "80px",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: "10px", lg: "90px" }, pb: "60px" }}>
            <Button
              onClick={() => navigate("/portfolio")}
              sx={{
                color: "#FFBD1F",
                fontSize: "13px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                mb: "20px",
                p: 0,
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 },
              }}
            >
              <ArrowBack sx={{ fontSize: "16px" }} />
              Back to Portfolio
            </Button>

            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(255,189,31,0.12)",
                border: "1px solid #FFBD1F",
                borderRadius: "50px",
                px: "16px",
                py: "6px",
                mb: "16px",
              }}
            >
              <Typography variant="normal" sx={{ color: "#FFBD1F", fontSize: "13px" }}>
                {work.category}
              </Typography>
            </Box>

            <Typography
              variant="normal"
              sx={{ fontSize: { xs: "32px", md: "64px" }, fontWeight: 700, lineHeight: 1.1, display: "block" }}
            >
              {work.title}
            </Typography>
            {work.subtitle && (
              <Typography
                variant="normal"
                sx={{ fontSize: { xs: "15px", md: "20px" }, color: "#FFBD1F", mt: "10px", display: "block", fontWeight: 500 }}
              >
                {work.subtitle}
              </Typography>
            )}
            <Typography
              variant="normal"
              sx={{ fontSize: { xs: "14px", md: "17px" }, color: "#A6A6A6", mt: "12px", maxWidth: "700px", display: "block", lineHeight: 1.7 }}
            >
              {work.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* OVERVIEW STRIP */}
      <Box
        sx={{
          backgroundColor: "#141414",
          borderTop: "1px solid rgba(255,189,31,0.2)",
          borderBottom: "1px solid rgba(255,189,31,0.2)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              px: { xs: "10px", lg: "90px" },
              py: "30px",
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "30px", md: "60px" },
              alignItems: "flex-start",
            }}
          >
            {/* Tech Stack */}
            <Box>
              <Typography
                variant="normal"
                sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
              >
                Tech Stack
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {work.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,189,31,0.1)",
                      color: "#fff",
                      border: "1px solid rgba(255,189,31,0.3)",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Duration */}
            <Box>
              <Typography
                variant="normal"
                sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
              >
                Duration
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Timer sx={{ color: "#FFBD1F", fontSize: "18px" }} />
                <Typography variant="normal" sx={{ fontSize: "15px" }}>
                  {work.duration}
                </Typography>
              </Box>
            </Box>

            {/* Completion */}
            <Box>
              <Typography
                variant="normal"
                sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
              >
                Status
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CalendarToday sx={{ color: "#FFBD1F", fontSize: "18px" }} />
                <Typography variant="normal" sx={{ fontSize: "15px" }}>
                  {work.completionDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* KEY FEATURES */}
      {work.features && work.features.length > 0 && (
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: "10px", lg: "90px" }, pt: "60px" }}>
            <Box
              sx={{
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255,189,31,0.15)",
                borderRadius: "16px",
                px: { xs: "24px", lg: "50px" },
                py: "40px",
              }}
            >
              <Typography
                variant="normal"
                sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "24px", display: "block" }}
              >
                Key Features
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                  gap: "14px",
                }}
              >
                {work.features.map((f) => (
                  <Box key={f} sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircleOutline sx={{ color: "#FFBD1F", fontSize: "17px", mt: "2px", flexShrink: 0 }} />
                    <Typography variant="normal" sx={{ fontSize: { xs: "13px", md: "14px" }, color: "#ccc", lineHeight: 1.5 }}>
                      {f}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      )}

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <Container maxWidth="xl">
        <Box sx={{ px: { xs: "10px", lg: "90px" }, py: "80px" }}>
          <Grid container spacing={6}>
            {/* Left: Challenge + Solution */}
            <Grid item xs={12} md={7}>
              {/* Challenge */}
              <Box
                sx={{
                  borderLeft: "3px solid #FFBD1F",
                  pl: "24px",
                  mb: "50px",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
                >
                  The Challenge
                </Typography>
                <Typography
                  variant="normal"
                  sx={{ fontSize: { xs: "15px", md: "17px" }, color: "#A6A6A6", lineHeight: 1.8 }}
                >
                  {work.challenge}
                </Typography>
              </Box>

              {/* Solution */}
              <Box
                sx={{
                  borderLeft: "3px solid rgba(255,255,255,0.2)",
                  pl: "24px",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{ color: "#fff", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
                >
                  Our Solution
                </Typography>
                <Typography
                  variant="normal"
                  sx={{ fontSize: { xs: "15px", md: "17px" }, color: "#A6A6A6", lineHeight: 1.8 }}
                >
                  {work.solution}
                </Typography>
              </Box>
            </Grid>

            {/* Right: Outcome */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  backgroundColor: "#141414",
                  border: "1px solid rgba(255,189,31,0.25)",
                  borderRadius: "16px",
                  p: "30px",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <Typography
                  variant="normal"
                  sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "16px", display: "block" }}
                >
                  Outcome
                </Typography>
                <Typography
                  variant="normal"
                  sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#fff", lineHeight: 1.8 }}
                >
                  {work.outcome}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Back button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: "80px" }}>
            <Button variant="primary" onClick={() => navigate("/portfolio")} sx={{ px: "40px", fontSize: "15px", height: "48px" }}>
              ← Back to Portfolio
            </Button>
          </Box>
        </Box>
      </Container>

      {/* SCREENSHOTS GALLERY — full width */}
      {allScreenshots.length > 0 && (
        <Box sx={{ backgroundColor: "#080808", borderTop: "1px solid rgba(255,189,31,0.1)", py: "70px" }}>
          <Container maxWidth="xl">
            <Box sx={{ px: { xs: "10px", lg: "90px" } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "36px" }}>
                <Box>
                  <Typography sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Montserrat, sans-serif", fontWeight: 600, mb: "6px" }}>
                    App Screenshots
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "Montserrat, sans-serif" }}>
                    Click any image to view full size
                  </Typography>
                </Box>
                <Chip
                  label={`${allScreenshots.length} screens`}
                  size="small"
                  sx={{ backgroundColor: "rgba(255,189,31,0.1)", border: "1px solid rgba(255,189,31,0.3)", color: "#FFBD1F", fontFamily: "Montserrat, sans-serif", fontSize: "12px" }}
                />
              </Box>

              {work.screenshotLayout === "grid" ? (
                /* Landscape desktop screenshots */
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: "16px" }}>
                  {allScreenshots.map((src, i) => (
                    <Box
                      key={i}
                      onClick={() => openLightbox(i)}
                      sx={{
                        position: "relative",
                        borderRadius: "14px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: "1px solid rgba(255,255,255,0.07)",
                        gridColumn: i === 0 ? { xs: "1", md: "1 / -1" } : "auto",
                        "&:hover .zoom-icon": { opacity: 1 },
                        "&:hover img": { transform: "scale(1.02)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={`${work.title} screenshot ${i + 1}`}
                        sx={{ width: "100%", display: "block", objectFit: "cover", transition: "transform 0.3s ease" }}
                      />
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: "absolute", inset: 0, opacity: 0, transition: "opacity 0.3s ease",
                          background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <ZoomIn sx={{ color: "#FFBD1F", fontSize: "40px" }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : (
                /* Portrait mobile screenshots */
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", md: "repeat(auto-fill, minmax(200px, 1fr))" }, gap: "16px", alignItems: "start" }}>
                  {allScreenshots.map((src, i) => (
                    <Box
                      key={i}
                      onClick={() => openLightbox(i)}
                      sx={{
                        position: "relative",
                        borderRadius: "18px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                        "&:hover .zoom-icon": { opacity: 1 },
                        "&:hover img": { transform: "scale(1.02)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={`${work.title} screenshot ${i + 1}`}
                        sx={{ width: "100%", display: "block", objectFit: "contain", transition: "transform 0.3s ease" }}
                      />
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: "absolute", inset: 0, opacity: 0, transition: "opacity 0.3s ease",
                          background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <ZoomIn sx={{ color: "#FFBD1F", fontSize: "36px" }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <Box
          onClick={closeLightbox}
          sx={{
            position: "fixed", inset: 0, zIndex: 99999,
            backgroundColor: "rgba(0,0,0,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Close */}
          <IconButton onClick={closeLightbox} sx={{ position: "absolute", top: "20px", right: "20px", color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", "&:hover": { backgroundColor: "rgba(255,189,31,0.2)" } }}>
            <Close />
          </IconButton>

          {/* Counter */}
          <Typography sx={{ position: "absolute", top: "26px", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.5)", fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}>
            {lightbox.index + 1} / {allScreenshots.length}
          </Typography>

          {/* Prev */}
          {allScreenshots.length > 1 && (
            <IconButton onClick={(e) => { e.stopPropagation(); prevImage(); }} sx={{ position: "absolute", left: { xs: "8px", md: "30px" }, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", "&:hover": { backgroundColor: "rgba(255,189,31,0.2)" } }}>
              <ChevronLeft sx={{ fontSize: "32px" }} />
            </IconButton>
          )}

          {/* Image */}
          <Box
            component="img"
            src={allScreenshots[lightbox.index]}
            alt="screenshot"
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: { xs: "90vw", md: "80vw" },
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            }}
          />

          {/* Next */}
          {allScreenshots.length > 1 && (
            <IconButton onClick={(e) => { e.stopPropagation(); nextImage(); }} sx={{ position: "absolute", right: { xs: "8px", md: "30px" }, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", "&:hover": { backgroundColor: "rgba(255,189,31,0.2)" } }}>
              <ChevronRight sx={{ fontSize: "32px" }} />
            </IconButton>
          )}
        </Box>
      )}

      {/* FOOTER */}
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

export default PortfolioDetail;
