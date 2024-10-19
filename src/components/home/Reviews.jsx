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
      name: "Alex",
      image: null,
      role: "CEO @ Google",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      platform: "Clutch",
      rating: 4.8,
    },
    {
      id: 2,
      name: "John",
      image: null,
      role: "CTO @ Microsoft",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      platform: "Upwork",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Emma",
      image: null,
      role: "CFO @ Amazon",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      platform: "Clutch",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Sophia",
      image: null,
      role: "COO @ Facebook",
      review:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      platform: "Upwork",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Liam",
      image: null,
      role: "CMO @ Apple",
      review:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      platform: "Clutch",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Olivia",
      image: null,
      role: "CHRO @ Netflix",
      review:
        "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      platform: "Upwork",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Noah",
      image: null,
      role: "CIO @ Tesla",
      review:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      platform: "Clutch",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Ava",
      image: null,
      role: "CDO @ Uber",
      review:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      platform: "Upwork",
      rating: 4.9,
    },
    {
      id: 9,
      name: "William",
      image: null,
      role: "CSO @ Airbnb",
      review:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      platform: "Clutch",
      rating: 4.6,
    },
    {
      id: 10,
      name: "James",
      image: null,
      role: "CPO @ Spotify",
      review:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      platform: "Upwork",
      rating: 4.7,
    },
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
