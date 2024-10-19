// import React from "react";
// import { ContactImg, DP } from "../../assets/images";
// import { Box, Container, Typography } from "@mui/material";
// import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

// function Contact() {
//   return (
//     <Box
//       id="contact"
//       sx={{
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         // width: "calc(100vw - 20px)",
//         // width: { xs: "100vw", md: "calc(100vw - 20px)" },
//         backgroundColor: "secondary.background",
//         mt: "100px",
//         py: "50px",
//       }}
//     >
//       <Box
//         sx={{
//           display: { xs: "block", md: "none" },
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${ContactImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(0.5) grayscale(100%)",
//           zIndex: 1,
//           width: "100vw",
//         }}
//       />
//       <Container
//         maxWidth="xl"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{
//             py: { xs: "10px", md: "30px" },
//             px: { xs: "10px", lg: "90px" },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: { xs: "100%", md: "50%" },
//                 pr: { xs: "0px", lg: "180px" },
//               }}
//             >
//               <Box sx={{ display: "flex", flexDirection: "column" }}>
//                 <Typography
//                   sx={{
//                     color: "secondary.main",
//                     fontSize: { xs: "60px", lg: "120px" },
//                     fontWeight: 700,
//                     lineHeight: 1,
//                     letterSpacing: "4px",
//                   }}
//                 >
//                   LET'S WORK
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "primary.main",
//                     fontSize: { xs: "60px", lg: "120px" },
//                     fontWeight: 700,
//                     lineHeight: 1,
//                     letterSpacing: "4px",
//                   }}
//                 >
//                   TOGETHER
//                 </Typography>
//                 <Typography
//                   variant="normal"
//                   sx={{
//                     color: "secondary.main",
//                     fontSize: { xs: "12px", md: "14px" },
//                     mt: "40px",
//                   }}
//                 >
//                   Got a cool project to discuss or curious to learn more about
//                   my approach and services? Let's talk!
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   backgroundColor: "primary.background",
//                   mt: "40px",
//                   height: "150px",
//                   //   width: "400px",
//                   gap: "20px",
//                   //   p: "20px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={DP}
//                   alt="dp"
//                   sx={{
//                     height: "100%",
//                     width: "150px",
//                     objectFit: "cover",
//                     objectPosition: "center 10%",
//                     borderTopLeftRadius: "10px",
//                     borderBottomLeftRadius: "10px",
//                   }}
//                 />
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   <Typography
//                     variant="bebus"
//                     sx={{
//                       color: "secondary.main",
//                       fontSize: { md: "24px", xs: "20px" },
//                       letterSpacing: "-1px",
//                       fontWeight: 700,
//                     }}
//                   >
//                     AFAQ KHAN
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "5px",
//                     }}
//                   >
//                     <Typography

//                       variant="normal"
//                       sx={{
//                         color: "secondary.main",
//                         fontSize: { md: "12px", xs: "12px" },
//                         textDecoration: "none",
//                         "&:hover": {
//                           textDecoration: "none",
//                           color: "secondary.main",
//                         },
//                       }}
//                       component="a"
//                       href="mailto:kafaq885@gmail.com"
//                     >
//                       kafaq885@gmail.com
//                     </Typography>
//                     <Typography
//                       variant="normal"
//                       sx={{
//                         color: "secondary.main",
//                         fontSize: { md: "12px", xs: "12px" },
//                       }}
//                     >
//                       +92 321 1467307
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: "flex", gap: "10px" }}>
//                     <Instagram
//                       onClick={() =>
//                         window.open("https://www.instagram.com/afaq_khan2000/")
//                       }
//                       sx={{
//                         color: "secondary.main",
//                         cursor: "pointer",
//                         fontSize: "20px",
//                       }}
//                     />
//                     <GitHub
//                       onClick={() =>
//                         window.open("https://github.com/afaq-khan2000")
//                       }
//                       sx={{
//                         color: "secondary.main",
//                         cursor: "pointer",
//                         fontSize: "20px",
//                       }}
//                     />
//                     <LinkedIn
//                       onClick={() =>
//                         window.open(
//                           "https://www.linkedin.com/in/afaq-khan-2a327a198/"
//                         )
//                       }
//                       sx={{
//                         color: "secondary.main",
//                         cursor: "pointer",
//                         fontSize: "20px",
//                       }}
//                     />
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
//               <Box
//                 component="img"
//                 src={ContactImg}
//                 alt="contact"
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "contain",
//                   filter: "grayscale(100%) brightness(0.7)",
//                   borderRadius: "10px",
//                 }}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Contact;
