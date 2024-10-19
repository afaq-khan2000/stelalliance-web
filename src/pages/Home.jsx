import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Banner,
  CEOMessage,
  Faqs,
  Reviews,
  Services,
  Team,
  Work,
  //  Contact, Faqs, Work, WorkMethod
} from "../components/home";

function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: { xs: "100vw", md: "calc(100vw - 20px)" },
      }}
    >
      <Banner />
      <CEOMessage />
      <Work />
      <Services />
      <Team />
      <Faqs />
      <Reviews />
      {/* <WorkMethod />
      <Faqs />
      <Contact /> */}
    </Box>
  );
}

export default Home;
