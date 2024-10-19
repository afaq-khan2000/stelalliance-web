import React, { useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
// react-player for youtube video
import ReactPlayer from "react-player/youtube";
import {
  Logo,
  MessageLeft,
  MessageRight,
  Spons1,
  Spons2,
  Spons3,
  Spons4,
  Spons5,
  Spons6,
  Spons8,
  Spons9,
} from "../../assets/images";
// using react-marquee-slider
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

function CEOMessage() {
  const ltr = [
    { logo: Spons1 },
    { logo: Spons2 },
    { logo: Spons3 },
    { logo: Spons4 },
    { logo: Spons5 },
    { logo: Spons6 },
    { logo: Spons8 },
    { logo: Spons9 },
  ];

  return (
    <Box
      id="our-story"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            py: { xs: "10px", md: "30px" },
            px: { xs: "10px", lg: "90px" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* <Box
                sx={{
                  // padding: "10px",
                  width: { xs: "100%", md: "30%" },
                  height: "250px",
                  border: "1px solid #313131",
                  borderRadius: "20px",
                  backgroundColor: "secondary.background",
                }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=k2maqlyUuVw&ab_channel=IndraIbrahim"
                  width="100%"
                  height="100%"
                  loop={true} // Loop the video
                  playing={true} // Autoplay the video
                  controls={false} // Hide controls if needed (optional)
                  muted={true} // Mute the video to prevent autoplay issues in browsers (optional)
                  style={{}} // You can apply additional styling here
                />
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: { xs: "100%", md: "50%" },
                  height: "250px",
                  border: "1px solid #313131",
                  borderRadius: "30px",
                  padding: "30px",
                  backgroundColor: "secondary.background",
                }}
              >
                <Box
                  component="img"
                  src={MessageLeft}
                  alt="message"
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: "150px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={MessageLeft}
                      alt="message"
                      sx={{
                        display: { xs: "block", md: "none" },
                        height: "50px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                    <Typography
                      variant="normal"
                      sx={{
                        color: "secondary.main",
                        fontSize: { md: "20px", xs: "16px" },
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Box
                      component="img"
                      src={MessageRight}
                      alt="message"
                      sx={{
                        display: { xs: "block", md: "none" },
                        height: "50px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="normal"
                    sx={{
                      color: "primary.main",
                      fontSize: { xs: "12px", md: "16px" },
                      marginTop: "20px",
                    }}
                  >
                    To pioneer innovative software solutions through
                    interdisciplinary collaboration, driving business success,
                    empowering individuals, and crafting applications that
                    inspire, educate, and advance society toward a smarter,
                    connected world.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={MessageRight}
                  alt="message"
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: "150px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: { xs: "100%", md: "50%" },
                  height: "250px",
                  border: "1px solid #313131",
                  borderRadius: "30px",
                  padding: "30px",
                  backgroundColor: "secondary.background",
                }}
              >
                <Box
                  component="img"
                  src={MessageLeft}
                  alt="message"
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: "150px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={MessageLeft}
                      alt="message"
                      sx={{
                        display: { xs: "block", md: "none" },
                        height: "50px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                    <Typography
                      variant="normal"
                      sx={{
                        color: "secondary.main",
                        fontSize: { md: "20px", xs: "16px" },
                      }}
                    >
                      Our Vision
                    </Typography>
                    <Box
                      component="img"
                      src={MessageRight}
                      alt="message"
                      sx={{
                        display: { xs: "block", md: "none" },
                        height: "50px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="normal"
                    sx={{
                      color: "primary.main",
                      fontSize: { xs: "12px", md: "16px" },
                      marginTop: "20px",
                    }}
                  >
                    To elevate the human experience by leveraging technology to
                    foster intellectual growth, inspire societal development,
                    and create transformative applications that enrich lives and
                    empower future generations.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={MessageRight}
                  alt="message"
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: "150px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                backgroundColor: "secondary.background",
                gap: { xs: "20px", md: "100px" },
                border: "1px solid #313131",
                borderRadius: "20px",
                padding: "30px",
                // height: "300px",
              }}
            >
              <Box sx={{ display: "flex", width: { xs: "100%", md: "30%" } }}>
                <Typography
                  variant="normal"
                  sx={{
                    color: "secondary.main",
                    fontSize: { md: "40px", xs: "30px" },
                    lineHeight: "2.5rem",
                  }}
                >
                  Our Vision
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", md: "70%" },
                  pl: { xs: 0, md: "100px" },
                  gap: { xs: "20px", md: "100px" },
                }}
              >
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "12px", md: "16px" },
                    lineHeight: "1.5rem",
                  }}
                >
                  To elevate the human experience by leveraging technology to
                  foster intellectual growth, inspire societal development, and
                  create transformative applications that enrich lives and
                  empower future generations.
                </Typography>
                <Typography
                  variant="normal"
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "12px", md: "16px" },
                    borderLeft: "1px solid #313131",
                    pl: "20px",
                    lineHeight: "2rem",
                  }}
                >
                  Our dedication to innovation, collaboration, and excellence
                </Typography>
              </Box>
            </Box> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                mt: "100px",
              }}
            >
              <Box
                sx={{
                  pb: "20px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    transform: "rotate(180deg)",
                    zIndex: -1,
                    background:
                      "radial-gradient(36.2% 59.16% at 51.5% 0%, #ffffff40, #fff0 62%)",
                    opacity: 0.6,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "1px",
                    background:
                      "radial-gradient(50% 50% at 50% 40%, #ffffff70, #fff0)",
                  },
                }}
              >
                <Marquee
                  velocity={20}
                  minScale={0.7}
                  direction="ltr"
                  resetAfterTries={200}
                >
                  {ltr.map((object, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                        mx: 1,
                        cursor: "pointer",
                        // backgroundColor: "primary.background",
                        // mixBlendMode: "lighten",
                        // filter: "grayscale(100%)",
                        // "&:hover": {
                        //   filter: "grayscale(0%)",
                        // },
                      }}
                      component="img"
                      src={object.logo}
                      alt={`Img ${index + 1}`}
                    />
                  ))}
                </Marquee>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CEOMessage;
