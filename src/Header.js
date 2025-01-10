import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* Logo Text */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "1rem", fontWeight: "bold" }}>
        PicSearch
        </Typography>

        {/* Explore Button */}
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "0.9rem" }}>
          Explore
        </Button>

        {/* License Button */}
        <Button color="inherit" sx={{ textTransform: "none", fontSize: "0.9rem", marginLeft: "10px" }}>
          License
        </Button>

        {/* Upload Button */}
        <Button
          variant="outlined"
          color="primary"
          sx={{
            textTransform: "none",
            fontSize: "0.9rem",
            marginLeft: "10px",
            borderColor: "#1976d2", // Customize border color
            color: "#1976d2", // Customize text color
            "&:hover": {
              backgroundColor: "#e3f2fd", // Light blue hover background
            },
          }}
        >
          Upload
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

