import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const useFetchTrending = (type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}`,
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
