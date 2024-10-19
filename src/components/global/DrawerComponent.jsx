import React from "react";
import { Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";

const DrawerComponent = ({ open, onClose, children }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", md: "50%" },
          backgroundColor: "secondary.background",
          color: "#fff",
          // border: "2px solid #FFBD1F",
          borderTop: "2px solid #FFBD1F",
          borderLeft: "2px solid #FFBD1F",
          borderBottom: "2px solid #FFBD1F",
          borderTopLeftRadius: "80px",
          borderBottomLeftRadius: "20px",
          py: "40px",
          px: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        },
      }}
    >
      <Close
        onClick={onClose}
        sx={{
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      />
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
