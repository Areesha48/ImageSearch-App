import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ImageCard = ({ image }) => {
  const defaultImage = "https://via.placeholder.com/200"; // Fallback image

  return (
    <Card>
      {/* Image */}
      <CardMedia
        component="img"
        height="200"
        image={image.src?.medium || defaultImage} // Fallback for missing image URL
        alt={image.alt || "Image not available"}
      />

      {/* Content */}
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {image.photographer || "Unknown Photographer"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {image.photographer_url ? (
            <a
              href={image.photographer_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              View Profile
            </a>
          ) : (
            <span>Profile not available</span>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
