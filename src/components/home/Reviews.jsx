import React from "react";
import { Avatar, Box, Container, Rating, Typography } from "@mui/material";
import Marquee from "react-marquee-slider";

const reviewCard = (review, index) => {
  return (
    <Box
      key={index}
      sx={{
        backgroundColor: "secondary.background",
        borderRadius: "20px",
        padding: "20px",
        border: "1px solid #313131",
        display: "flex",
        flexDirection: "column",
        minWidth: "400px",
        maxWidth: "400px",
        gap: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Avatar
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "primary.background",
          }}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
        >
          <Typography variant="normal">{review.name}</Typography>
          <Typography variant="normal" sx={{ color: "primary.light" }}>
            {review.role}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="normal"
        sx={{ textAlign: "left", color: "primary.light" }}
      >
        "{review.review}"
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="normal">{review.platform}</Typography>
        <Typography variant="normal" sx={{ color: "primary.light" }}>
          {review.rating}
        </Typography>
        <Rating value={review.rating} readOnly />
      </Box>
    </Box>
  );
};

function Reviews() {
  const pairReviews = (data) => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
      pairs.push(data.slice(i, i + 2));
    }
    return pairs;
  };

  const reviewData = [
    {
      id: 1,
      name: "Guy Bennett",
      image: null,
      role: "Globalstock news",
      review:
        "Stelalliance provides exceptional work in generative AI, truly remarkable in their field.",
      platform: "Upwork",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Allison Macquire",
      image: null,
      role: "COO @ Estate Magnets",
      review: "Great experience working with their team. The team was organized, well-mannered, and good to work with.",
      platform: "LinkedIn",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Syed Hamza Imran",
      image: null,
      role: "Marketing Director @ SL Corporations",
      review:
        "Highly skilled team with great communication. Delivered ahead of schedule and beyond expectations.",
      platform: "LinkedIn",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Qadar Sarfaraz",
      image: null,
      role: "CEO @ Airmans ground",
      review:
        "Fast, reliable, and professional. They handled our complex project with ease.",
      platform: "Upwork",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Iftikhar Yazdani",
      image: null,
      role: "MD @ Rah-e-Qamar",
      review:
        "They provided excellent service from start to finish. Their knowledge in AI and automation has transformed the way we handle data, leading to significant. Highly recommended!",
      platform: "LinkedIn",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Hamza Malik",
      image: null,
      role: "Co founder @ DealerPro",
      review:
      "Their ability to manage complex projects with ease really stood out. The SaaS solution they built for us has transformed our customer interaction processes.",
      platform: "Linkedin",
      rating: 4.8,
    },
    // {
    //   id: 7,
    //   name: "Noah",
    //   image: null,
    //   role: "CIO @ Tesla",
    //   review:
    //     "Creative, on time, and professional. Their AI solutions are outstanding.",
    //   platform: "Clutch",
    //   rating: 4.7,
    // },
    // {
    //   id: 8,
    //   name: "Ava",
    //   image: null,
    //   role: "CDO @ Uber",
    //   review:
    //   "Highly skilled team with great communication. Delivered ahead of schedule and beyond expectations.",
    //   platform: "Upwork",
    //   rating: 4.9,
    // },
    // {
    //   id: 9,
    //   name: "William",
    //   image: null,
    //   role: "CSO @ Airbnb",
    //   review:
    //     "The team delivered a well-structured and innovative solution that addressed our unique challenges. Their approach is forward-thinking, and they provided great support.",
    //   platform: "Clutch",
    //   rating: 4.6,
    // },
    // {
    //   id: 10,
    //   name: "James",
    //   image: null,
    //   role: "CPO @ Spotify",
    //   review:
    //     "Their ability to manage complex projects with ease really stood out. The AI solution they built for us has transformed our customer interaction processes.",
    //   platform: "Upwork",
    //   rating: 4.7,
    // },
];

  const pairs = pairReviews(reviewData);

  return (
    <Box
      id="reviews"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        mt: "100px",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography variant="heading">Insights</Typography>
            <Typography
              variant="normal"
              sx={{
                fontSize: { md: "54px", xs: "24px" },
                lineHeight: "3rem",
                textAlign: "center",
              }}
            >
              See what our clients
              <br />
              are saying about us
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: "40px",
            }}
          >
            <Box
              sx={{
                borderRadius: "10%", // Rounded effect
                overflow: "hidden", // Ensure content is clipped
                position: "relative", // Needed for absolute positioning of the gradient
              }}
            >
              {/* Gradient Overlay to Create the Smooth Blur Effect for Black Background */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1, // Place it above the marquee
                  background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1))`,
                  pointerEvents: "none", // Allow interactions with underlying elements
                }}
              />
              <Marquee
                velocity={30}
                minScale={0.7}
                direction="ltr"
                resetAfterTries={200}
                style={{ zIndex: 0 }}
              >
                {pairs.map((pair, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: "400px",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                    }}
                  >
                    {pair.map((review, index) => reviewCard(review, index))}
                  </Box>
                ))}
              </Marquee>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Reviews;
