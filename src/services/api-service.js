import axios from "axios";

let api_url = 'https://rickandmortyapi.com/api/character';

export const getCharacterList = () => {
  const data = axios.get(api_url).then((res) => {
    api_url = res.data.info.next;
    return res.data.results;
  });
  return data;
};

