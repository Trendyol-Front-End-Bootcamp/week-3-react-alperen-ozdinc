import { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterList from '../components/characters/CharacterList';

function Home() {
  const [apiURL, setApiURL] = useState('https://rickandmortyapi.com/api/character');
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get(apiURL)
    .then(res => {
      setCharacters(res.data.results);
    });
  },[])
  return (
    <div className="App">
      <h1 className="header-title">The Rick and Morty API</h1>
      <hr />
      {characters.length ? <CharacterList characterList = {characters}/> : null}
    </div>
  );
}

export default Home;