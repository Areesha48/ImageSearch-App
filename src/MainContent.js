import React from "react";
import { Box, Typography } from "@mui/material";

const MainContent = ({ bgImage }) => {
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
        backgroundImage: `url(${bgImage || "/maincontentimg.webp"})`, // Fallback image if no prop provided
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
      }}
    >
      <Typography 
  variant="h4" 
  gutterBottom 
  color="textPrimary" // Uses the primary text color defined in your theme
>
  The best free stock photos, royalty free images shared by creators.
</Typography>

    </Box>
  );
};

export default MainContent;
