import { useState, useEffect } from 'react';

function usePostcards() {
  const [postcards, setPostcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPostcards() {
      try {
        const response = await fetch('https://api.example.com/postcards');
        if (!response.ok) {
          throw new Error('Failed to fetch postcards');
        }
        const data = await response.json();
        setPostcards(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchPostcards();
  }, []);

  return { postcards, loading, error };
}

export default usePostcards;
