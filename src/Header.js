import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={1} // Subtle shadow for depth
      sx={{
        backgroundColor: "#f5f5f5", // Light background color
        color: "#333", // Dark text color for contrast
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px", // Increase navbar height
          padding: "0 24px", // Add horizontal padding
        }}
      >
        {/* Logo Text */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: "1.5rem", // Slightly larger font size
            fontWeight: "bold",
            color: "#1976d2", // Custom logo color
            fontFamily: "'Poppins', sans-serif", // Use a modern font
          }}
        >
          PicSearch
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

