import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCharacterList } from "../services/api-service";
import CharacterList from "../components/characters/CharacterList";

const MAX_NUMBER_OF_CHARACTERS = 100;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (characters.length >= MAX_NUMBER_OF_CHARACTERS) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      getCharacterList().then((res) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...res];
        });
      });
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="header-title">The Rick and Morty API</h1>
      <hr />

      <InfiniteScroll
        dataLength={characters.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {<CharacterList characterList={characters}/>}
      </InfiniteScroll>
    </div>
  );
}

export default Home;
