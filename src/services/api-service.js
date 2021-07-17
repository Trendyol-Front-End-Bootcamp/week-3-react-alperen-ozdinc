import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

export const getCharacterList = ({ currentPage, genderFilter, statusFilter }) => {
  let pageUrl = `${API_URL}?page=${currentPage}`;

  if (genderFilter) {
    pageUrl += `&gender=${genderFilter}`;
  }
  if (statusFilter) {
    pageUrl += `&status=${statusFilter}`;
  }

  const data = axios.get(pageUrl).then((res) => {
    return res.data;
  }).catch((err) => null);

  return data;
};

export const getSingleCharacter = (id) => {
  let characterURL = `${API_URL+id}`;
  const data = axios.get(characterURL).then((res)=>{
    return res.data;
  })
  return data;
}
