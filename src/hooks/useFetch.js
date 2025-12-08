// src/hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

// IMPORTANT: Define the base URL for your running Strapi server.
// Default for Strapi development is http://localhost:1337
const STRAPI_BASE_URL = "http://localhost:1337/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Reset loading state on new request
      setError(null); // Clear previous errors

      try {
        // Concatenate the base URL with the specific endpoint (e.g., /experiences)
        const response = await axios.get(`${STRAPI_BASE_URL}${url}`);

        // Strapi (v4+) wraps all response content in a 'data' property.
        // We extract this 'data' property to make it cleaner for the components.
        console.log(response.data);
        setData(response.data.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(
          "Failed to fetch data from Strapi. Check if the server is running and permissions are set."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); // Dependency array: Re-run effect if the URL changes

  // Return the necessary states for the consuming components
  return { data, loading, error };
};

export default useFetch;
