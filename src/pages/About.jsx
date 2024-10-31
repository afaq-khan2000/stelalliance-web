import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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

function About() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  useEffect(() => {
    const element = document.getElementById("our-work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: { xs: "100vw", md: "calc(100vw - 20px)" },
      }}
    >
      <Banner setOpenDrawer={setOpenDrawer} setOpenDrawer2={setOpenDrawer2} openDrawer={openDrawer} openDrawer2={openDrawer2} title="Who we are?" textsToChange={["Creators", "Innovators", "Thinkers"]} showStats={false} />
      <CEOMessage />
      <Team />
      <Footer setOpenDrawer={setOpenDrawer} setOpenDrawer2={setOpenDrawer2} openDrawer={openDrawer} openDrawer2={openDrawer2} />
    </Box>
  );
}

export default About;
