function CharacterCard({character}) {
    const {image, name, status, species, location, url} = character;

  return (
    <div className="character-card-container">
      <a href={url}>
        <div className="character-card">
            <div className="character-card-image">
                <img src={image} alt="Character Card" />
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
                  <span className="text-gray">First seen in:</span>
                  <span>
                      {location.name}
                  </span>
              </div>
            </div>
        </div>
      </a>
    </div>
  );
}

export default CharacterCard;
