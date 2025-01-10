import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const ImageGrid = ({ images }) => {
  const defaultImage = "https://via.placeholder.com/200"; // Fallback image

  return (
    <div>
      {images.length > 0 ? (
        <Grid container spacing={2} sx={{ padding: "20px", justifyContent: "center" }}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={image.src?.medium || defaultImage} // Fallback for missing image
                  alt={image.alt || "Image description not available"}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {image.photographer || "Unknown Photographer"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" align="center" sx={{ marginTop: "20px" }}>
          No images found. Try searching for something else.
        </Typography>
      )}
    </div>
  );
};

export default ImageGrid;

