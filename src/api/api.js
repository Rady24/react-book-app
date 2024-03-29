import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchBooksByCriteria = async (searchCriteria) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchCriteria}&key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books:", error);
  }
};

export { fetchBooksByCriteria };
