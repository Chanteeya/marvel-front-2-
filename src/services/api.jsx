import axios from "axios";

const BASE_URL = "https://site--marvel-back--sgpb29glfkkv.code.run";

export const fetchCharacters = async (page) => {
  const response = await axios.get(`${BASE_URL}/characters`, {
    params: { limit: 100, page },
  });
  return response.data;
};

export const fetchComics = async (page) => {
  const response = await axios.get(`${BASE_URL}/comics`, {
    params: { limit: 100, page },
  });
  return response.data;
};

export const fetchCharacterDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/characters/${id}`);
  return response.data;
};
