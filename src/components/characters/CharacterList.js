import CharacterCard from './CharacterCard';

function CharacterList({ characterList }){

    return (
        <div className="character-list">
        {characterList.map(character => {
            return (<CharacterCard character = {character}/>)
        })}
        </div>
    )
}

export default CharacterList;