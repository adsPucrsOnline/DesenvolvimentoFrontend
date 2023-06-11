import { useState, useEffect } from 'react';
import axios from 'axios';

const usePostcards = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
;        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao carregar os dados');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default usePostcards;
