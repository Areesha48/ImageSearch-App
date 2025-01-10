import axios from "axios";

// Your provided Pexels API Key
const API_KEY = "DIG7Cu2oH2wVJXi3a5hmULhufrdAsfWQeEB8Gs8L1K4kpY40y0GPlxIU";
const BASE_URL = "https://api.pexels.com/v1"; // Pexels API base URL

// Function to fetch images based on the search query
export const fetchImages = async (query) => {
  try {
    // API request to fetch images
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: API_KEY, // Authorization header with API key
      },
      params: {
        query: query, // User input search term, e.g., "nature"
        per_page: 15,  // Number of images to fetch
      },
    });

    // Return the array of photos from the response
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
