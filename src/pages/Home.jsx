import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
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
      <CEOMessage />
      <Work />
      <Services />
      <Reviews />
      <Team />
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
