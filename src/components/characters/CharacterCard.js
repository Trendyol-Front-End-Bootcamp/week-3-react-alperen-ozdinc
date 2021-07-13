function CharacterCard({character}) {
    const {image, name, status, species, location} = character;

  return (
    <div className="character-card">
      <div className="character-card-image">
          <img src={image} alt="Character Card" />
      </div>
      <div className="character-card-content">
        <div className="section">
          <a href="#">
              <h2 className="character-name">{name}</h2>
          </a>
          <span className="character-status">
            {status} - {species}
          </span>
        </div>
        <div className="section">
            <span className="text-gray">Last known location:</span>
            <a href="#">
                {location.name}
            </a>
        </div>
        <div className="section">
            <span class="text-gray">First seen in:</span>
            <a href="#">
                {location.name}
            </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
