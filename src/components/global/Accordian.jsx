import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

export default function Accordian({ items }) {
  return (
    <Box>
      {items.map((data, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "secondary.background",
              boxShadow: "none",
              border: "1px solid #313131",
              padding: "10px",
              mb: "10px",
              borderRadius: "20px",
              // apply border radius to the first and last accordions
              "&:first-child": {
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              },
              "&:last-child": {
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon sx={{ color: "secondary.main" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                padding: "0px",
              }}
            >
              <Typography
                variant="normal"
                sx={{
                  fontSize: { md: "18px", xs: "14px" },
                  letterSpacing: "-1px",
                  fontWeight: 700,
                }}
              >
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "0px",
              }}
            >
              <Typography
                variant="normal"
                sx={{
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                {data.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
