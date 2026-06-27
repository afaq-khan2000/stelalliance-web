import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "@mui/icons-material";
import {
  Banner,
  CEOMessage,
  Faqs,
  Footer,
  Reviews,
  Services,
  Team,
  Work,
  //  Contact, Faqs, Work, WorkMethod
} from "../components/home";

function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: { xs: "100vw", md: "calc(100vw - 20px)" },
      }}
    >
      <Banner
        setOpenDrawer={setOpenDrawer}
        setOpenDrawer2={setOpenDrawer2}
        openDrawer={openDrawer}
        openDrawer2={openDrawer2}
      />
      {/* <CEOMessage /> */}
      <Work showAll={false} />

      {/* CYBERSECURITY TEASER */}
      <Box
        sx={{
          mt: "100px",
          mx: { xs: "16px", md: "60px", lg: "120px" },
          borderRadius: "24px",
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(255,189,31,0.10) 0%, transparent 65%), #141414",
          border: "1px solid rgba(255,189,31,0.25)",
          px: { xs: "24px", md: "60px" },
          py: { xs: "40px", md: "60px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: "30px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,189,31,0.06)",
            pointerEvents: "none",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          <Shield sx={{ color: "#FFBD1F", fontSize: "40px", mt: "4px", flexShrink: 0 }} />
          <Box>
            <Typography
              variant="normal"
              sx={{ color: "#FFBD1F", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", display: "block", mb: "10px" }}
            >
              Stelalliance Security
            </Typography>
            <Typography
              variant="normal"
              sx={{ fontSize: { xs: "22px", md: "34px" }, fontWeight: 700, lineHeight: 1.2, display: "block" }}
            >
              Simulate the Threat.{" "}
              <Box component="span" sx={{ color: "#FFBD1F" }}>
                Strengthen the Defense.
              </Box>
            </Typography>
            <Typography
              variant="normal"
              sx={{ fontSize: { xs: "13px", md: "15px" }, color: "#A6A6A6", mt: "10px", maxWidth: "580px", lineHeight: 1.7, display: "block" }}
            >
              Red teaming, adversary simulation, penetration testing, and resilience engineering — delivered under the Stelalliance banner with operator-led tradecraft and reporting your leadership can act on.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="primary"
          sx={{ px: "32px", fontSize: "14px", height: "48px", flexShrink: 0, whiteSpace: "nowrap" }}
          onClick={() => navigate("/security")}
        >
          Explore Security Services
        </Button>
      </Box>

      <Services />
      <Reviews />
      {/* <Team /> */}
      <Faqs />
      <Footer
        setOpenDrawer={setOpenDrawer}
        setOpenDrawer2={setOpenDrawer2}
        openDrawer={openDrawer}
        openDrawer2={openDrawer2}
      />
      {/* <WorkMethod />
      <Faqs />
      <Contact /> */}
    </Box>
  );
}

export default Home;
