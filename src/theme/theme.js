import { createTheme } from "@mui/material/styles";
// import "../assets/fonts/TuskerGrotesk3800Super.DODskLYx.woff2";
// import "../assets/fonts/TuskerGrotesk4700Bold.vTnXbop9.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#A6A6A6",
      background: "#000",
    },
    secondary: {
      main: "#FFBD1F",
      background: "#141414",
    },
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",
    normal: {
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "1px",
      lineHeight: 1.5,
      color: "#fff",
    },
    heading: {
      color: "#FFBD1F",
      backgroundColor: "#171802",
      borderRadius: "50px",
      border: "1px solid #FFBD1F",
      padding: "10px 20px",
      fontSize: "18px",
    },
  },

  components: {
    // Global component styles can be added here
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: "Montserrat, sans-serif",
          mixBlendMode: "normal",
          boxSizing: "border-box",
          boxShadow: "none",
          textTransform: "none",
          height: "40px",
          ...(ownerState.variant === "primary" && {
            backgroundColor: "#FFBD1F",
            borderRadius: "50px",
            color: "#000000",
            fontSize: "12px",
            fontWeight: 400,
            px: "20px",
            "&:hover": {
              backgroundColor: "#fff",
              border: "none",
              outline: "none",
              color: "#000000",
            },
            "&:active": {
              backgroundColor: "#fff",
              border: "none",
              outline: "none",
              color: "#000000",
            },
            "&:focus": {
              backgroundColor: "#fff",
              border: "none",
              outline: "none",
              color: "#000000",
            },
          }),
        }),
      },
    },
  },
});

export default theme;
