
import axios from 'axios';

const usePostcards = () => {

  const getAllPostcard = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/postcards/`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

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

  const deletePostcard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/postcards/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getAllPostcard, getPostcard, updatePostcard, deletePostcard };

};

export default usePostcards;
