import './SingleCharacter.css'

function SingleCharacter({ character }) {
  const { image, name, status, species, gender, location, origin, episode } = character;
  
  const getEpisodes = () => {
    const episodes = episode.map((ep) => {
      return ep.slice(ep.lastIndexOf("/") + 1);
    });
    return episodes;
  };

  return (
    <div className="single-character">
      <div className="character-image">
        <img src={image} alt="Character Image" />
      </div>
      <div className="character-info">
        <h2 className="character-title">{name}</h2>
        <ul className="character-details">
          <li>
            <span className="character-property">Status:</span> {status}
          </li>
          <li>
            <span className="character-property">Species:</span> {species}
          </li>
          <li>
            <span className="character-property">Gender:</span> {gender}
          </li>
          <li>
            <span className="character-property">Origin:</span> {origin.name}
          </li>
          <li>
            <span className="character-property">Last seen in:</span>{" "}
            {location.name}
          </li>
          <li className="episodes">
            <span className="character-property">Episodes:</span>
            <div className="episodes">
              {getEpisodes().map((episode) => (
                <div className="episode" key={episode}>
                  {episode}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SingleCharacter;
