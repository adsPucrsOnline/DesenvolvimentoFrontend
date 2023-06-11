import { useState } from 'react';
import axios from 'axios';

const usePostcards = () => {
  const getPostcard = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/postcards/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updatePostcard = async (postcard) => {
    try {
      await axios.put(`http://localhost:5000/postcards/${postcard.id}`, postcard);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getPostcard, updatePostcard };
};

export default usePostcards;
