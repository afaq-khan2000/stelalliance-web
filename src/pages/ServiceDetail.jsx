import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { ArrowBack, CheckCircleOutline } from "@mui/icons-material";
import { bannerBg } from "../assets/images";
import DrawerComponent from "../components/global/DrawerComponent";
import ContactForm from "../components/home/ContactForm";
import JoinUsForm from "../components/home/JoinUsForm";
import { Banner, Footer } from "../components/home";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <Box
        sx={{
          overflowX: "hidden",
          width: { xs: "100vw", md: "calc(100vw - 20px)" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: "20px",
        }}
      >
        <Typography variant="normal" sx={{ fontSize: "22px" }}>
          Service not found.
        </Typography>
        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ overflowX: "hidden", width: { xs: "100vw", md: "calc(100vw - 20px)" } }}>
      <Banner
        setOpenDrawer={setOpenDrawer}
        setOpenDrawer2={setOpenDrawer2}
        openDrawer={openDrawer}
        openDrawer2={openDrawer2}
        showStats={false}
        title={service.tagline}
        textsToChange={[service.title]}
      />

      {/* Back breadcrumb */}
      <Container maxWidth="xl">
        <Box sx={{ px: { xs: "10px", lg: "90px" }, pt: "40px" }}>
          <Button
            onClick={() => navigate("/#services")}
            sx={{
              color: "secondary.main",
              fontSize: "13px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              p: 0,
              fontFamily: "Montserrat, sans-serif",
              "&:hover": { backgroundColor: "transparent", opacity: 0.7 },
            }}
          >
            <ArrowBack sx={{ fontSize: "16px" }} />
            All Services
          </Button>
        </Box>
      </Container>

      {/* MAIN CONTENT */}
      <Box sx={{ position: "relative", mt: "60px" }}>
        <Box
          component="img"
          src={bannerBg}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            right: { xs: "-120px", md: "-80px" },
            top: "-60px",
            width: { xs: "300px", md: "420px" },
            opacity: 0.1,
            filter: "brightness(0.7)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ px: { xs: "10px", lg: "90px" }, pb: "80px" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: "20px" }}>
              <Typography variant="heading">Stelalliance</Typography>
            </Box>

            <Grid container spacing={6} sx={{ mt: "20px" }}>
              {/* LEFT */}
              <Grid item xs={12} md={7}>
                <Typography
                  variant="normal"
                  sx={{ color: "secondary.main", fontSize: { md: "54px", xs: "24px" }, lineHeight: "3rem", display: "block", mb: "30px" }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="normal"
                  sx={{ fontSize: { md: "16px", xs: "14px" }, color: "primary.light", lineHeight: 1.85 }}
                >
                  {service.description}
                </Typography>

                {/* Why it matters */}
                <Box sx={{ mt: "40px", borderLeft: "3px solid #FFBD1F", pl: "24px", py: "4px" }}>
                  <Typography
                    variant="normal"
                    sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "12px", display: "block" }}
                  >
                    Why it matters
                  </Typography>
                  <Typography
                    variant="normal"
                    sx={{ fontSize: { md: "15px", xs: "14px" }, color: "primary.light", lineHeight: 1.9 }}
                  >
                    {service.whyItMatters}
                  </Typography>
                </Box>

                {/* What we do */}
                <Box sx={{ mt: "50px" }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-start", mb: "24px" }}>
                    <Typography variant="heading">What we do</Typography>
                  </Box>
                  <Grid container spacing={1.5} sx={{ mt: "10px" }}>
                    {service.what.map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                          <CheckCircleOutline sx={{ color: "secondary.main", fontSize: "18px", mt: "3px", flexShrink: 0 }} />
                          <Typography variant="normal" sx={{ fontSize: { md: "15px", xs: "13px" }, lineHeight: 1.6 }}>
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              {/* RIGHT: sidebar */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    backgroundColor: "secondary.background",
                    border: "1px solid rgba(255,189,31,0.2)",
                    borderRadius: "16px",
                    p: "36px",
                    position: "sticky",
                    top: "40px",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "flex-start", mb: "20px" }}>
                    <Typography variant="heading">Capabilities</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mb: "32px", mt: "10px" }}>
                    {service.highlights.map((h) => (
                      <Chip
                        key={h}
                        label={h}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,189,31,0.08)",
                          border: "1px solid rgba(255,189,31,0.3)",
                          color: "primary.main",
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "12px",
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="primary"
                    fullWidth
                    sx={{ mt: "8px", height: "44px", fontSize: "14px" }}
                    onClick={() => setOpenDrawer(true)}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => navigate("/")}
                    sx={{
                      mt: "10px",
                      color: "primary.light",
                      fontSize: "13px",
                      textTransform: "none",
                      fontFamily: "Montserrat, sans-serif",
                      height: "38px",
                      "&:hover": { color: "primary.main", backgroundColor: "transparent" },
                    }}
                  >
                    ← All Services
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* SCENARIO / APPROACH */}
      <Box sx={{ backgroundColor: "secondary.background", py: "80px" }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: "10px", lg: "90px" } }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: "20px" }}>
              <Typography variant="heading">{service.scenario.label}</Typography>
            </Box>
            <Grid container spacing={6} sx={{ mt: "10px" }} alignItems="flex-start">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="normal"
                  sx={{ fontSize: { md: "16px", xs: "14px" }, color: "primary.light", lineHeight: 2 }}
                >
                  {service.scenario.text}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box sx={{ borderLeft: "3px solid #FFBD1F", pl: "24px" }}>
                  <Typography
                    variant="normal"
                    sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", mb: "20px", display: "block" }}
                  >
                    Who this is for
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {service.whoFor.map((item, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <Box
                          sx={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            backgroundColor: "#FFBD1F", flexShrink: 0, mt: "7px",
                          }}
                        />
                        <Typography variant="normal" sx={{ fontSize: { md: "15px", xs: "13px" }, color: "primary.light", lineHeight: 1.65 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ mt: "100px", mb: "100px" }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: "10px", lg: "90px" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between",
                gap: "30px",
                backgroundColor: "secondary.background",
                borderRadius: "16px",
                border: "1px solid rgba(255,189,31,0.2)",
                px: { xs: "24px", md: "50px" },
                py: "50px",
              }}
            >
              <Box>
                <Typography variant="heading" sx={{ display: "inline-block", mb: "16px" }}>
                  Get Started
                </Typography>
                <Typography
                  variant="normal"
                  sx={{ color: "secondary.main", fontSize: { md: "40px", xs: "22px" }, lineHeight: 1.2, display: "block", mt: "10px" }}
                >
                  Ready to discuss {service.title}?
                </Typography>
                <Typography
                  variant="normal"
                  sx={{ fontSize: { md: "16px", xs: "14px" }, color: "primary.light", mt: "12px", maxWidth: "500px", lineHeight: 1.7 }}
                >
                  Reach out to start a conversation about your project, engagement, or partnership.
                </Typography>
              </Box>
              <Button
                variant="primary"
                sx={{ px: "36px", fontSize: "14px", height: "48px", flexShrink: 0, whiteSpace: "nowrap" }}
                onClick={() => setOpenDrawer(true)}
              >
                Contact Us
              </Button>
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

export default ServiceDetail;
