import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCharacterList } from "../services/api-service";
import FilterSection from "../components/filters/FilterSection";
import CharacterList from "../components/characters/CharacterList";

const MAX_NUMBER_OF_CHARACTERS = 100;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  
  const fetchData = () => {
    if (characters.length >= MAX_NUMBER_OF_CHARACTERS || !hasMore) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      getCharacterList({ currentPage, genderFilter, statusFilter }).then((res) => {
        setCurrentPage((prevPage) => prevPage + 1);
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...res.results];
        });
        if(!res.info.next){
          setHasMore(false);
        }
      });
    }, 500);
  };

  const filterCharacters = () => {
    setHasMore(true);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage === 1) {
      setCharacters([]);
      fetchData();
    }
  }, [currentPage]);

  return (
    <main className="app-main">
      <FilterSection
        genderFilter={setGenderFilter}
        statusFilter={setStatusFilter}
        filterHandler={filterCharacters}
      />
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
        {<CharacterList characterList={characters} />}
      </InfiniteScroll>
    </main>
  );
}

export default Home;
