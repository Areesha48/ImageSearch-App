import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State for search input

  // Handles user input changes in the search bar
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Triggers the search on button click or Enter key
  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query); // Call the parent's onSearch function
    }
  };

  // Trigger search when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Clears the search bar
  const handleClear = () => {
    setQuery(""); // Reset the input field
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "20px 0" }}
    >
      {/* Input Field for Search */}
      <TextField
        variant="outlined"
        label="Search Images"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Handles Enter key press
        sx={{ width: "70%", marginRight: "10px" }}
      />

      {/* Search Button */}
      <Button
        variant="outlined"
        onClick={handleSearch}
        aria-label="Search for images"
        sx={{
          textTransform: "none",
          fontSize: "0.9rem", // Smaller text
          borderColor: "#1976d2", // Custom border color
          color: "#1976d2", // Custom text color
          "&:hover": {
            backgroundColor: "#e3f2fd", // Light blue hover background
          },
        }}
      >
        Search
      </Button>

      {/* Clear Button */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClear}
        sx={{
          textTransform: "none",
          fontSize: "0.9rem", // Smaller text
          marginLeft: "10px",
          borderColor: "#9c27b0", // Custom border color for Clear button
          color: "#9c27b0", // Custom text color for Clear button
          "&:hover": {
            backgroundColor: "#f3e5f5", // Light purple hover background
          },
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default SearchBar;


