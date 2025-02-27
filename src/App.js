import React, { useState } from "react";
import { Typography } from "@mui/material";
import { fetchImages } from "./api/api";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ImageGrid from "./ImageGrid";
import Loading from "./Loading";
import MainContent from "./MainContent";
import Footer from "./Footer"; // Import Footer component

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const result = await fetchImages(query);
      setImages(result);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <MainContent bgImage="/image1.jpeg" />

      <div style={{ padding: "20px" }}>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loading />}
        {!loading && images.length === 0 ? (
         <Typography variant="h6" style={{ color: "#0A0A0A" }} align="center">
         No images found. Try searching for something else.
       </Typography>
       
        ) : (
          <ImageGrid images={images} />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
