import React from "react";
import { Box, Typography } from "@mui/material";

const MainContent = ({ bgImage }) => {
  const text = "The best free stock photos, royalty free images shared by creators.";
  const words = text.split(" "); // Split text into words

  return (
    <Box
      sx={{
        height: "400px", // Adjust the height of the hero section
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff", // White text for readability
        backgroundImage: `url(${bgImage || "/image1.jpeg"})`, // Fallback image if no prop provided
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "textPrimary", // Uses the primary text color defined in your theme
          display: "flex",
          flexWrap: "wrap", // Allow words to wrap to the next line
          justifyContent: "center",
        }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              opacity: 0, // Start with 0 opacity
              animation: `fadeInWord 0.5s ease-in-out forwards ${index * 0.3}s`, // Delay each word
            }}
          >
            {word}&nbsp; {/* Add space after each word */}
          </span>
        ))}
      </Typography>
      <style>
        {`
          @keyframes fadeInWord {
            0% {
              opacity: 0;
              transform: translateY(20px); // Slide up effect
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default MainContent;
