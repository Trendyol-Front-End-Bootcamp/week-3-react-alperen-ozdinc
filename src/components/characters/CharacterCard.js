import { Link } from "react-router-dom";

function CharacterCard({character}) {
    const {id, image, name, status, species, location} = character;
    const setStatusIcon = () => {
      let statusIcon;
      switch(status){
        case 'Alive':
          statusIcon = <div className="status alive"></div>
          break;
        case 'Dead':
          statusIcon = <div className="status dead"></div>
          break;
        case 'unknown':
          statusIcon = <div className="status unknown"></div>
          break;
        default:
          break; 
      }
      return statusIcon;
    }

  return (
      <div className="character-card-container">
        <Link to={`/character/${id}`}>
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
                    {setStatusIcon()}
                    {status} - {species}
                  </span>
                </div>
                <div className="section">
                    <span className="text-gray">Last known location:</span>
                    <span>
                        {location.name}
                    </span>
                </div>
              </div>
          </div>
        </Link>
      </div>
  );
}

export default CharacterCard;
