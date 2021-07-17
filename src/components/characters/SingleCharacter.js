
function SingleCharacter({character}) {
    const {id, image, name, status, species, location, episode} = character;
    const getEpisodes = () => {
        const episodes = episode.map((ep) => {
              return ep.slice(ep.lastIndexOf('/') + 1);
        })
        return episodes;
    }

  return (
      <div className="character-card-container">
          <div className="character-card detailed">
              <div className="character-card-image">
                  <img src={image} alt="Character Image" />
              </div>
              <div className="character-card-content">
                <div className="section">
                  <span>
                      <h2 className="character-name">{name}</h2>
                  </span>
                  <span className="character-status">
                    {status} - {species}
                  </span>
                </div>
                <div className="section">
                    <span className="text-gray">Last known location:</span>
                    <span>
                        {location.name}
                    </span>
                </div>
                <div className="section">
                  <div className="episodes-container">
                    <span className="text-gray">Episodes</span>
                    <div className="episodes">
                    {getEpisodes().map(episode => <div className="episode" key={episode}>{episode}</div>)}
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
  );
}

export default SingleCharacter;
