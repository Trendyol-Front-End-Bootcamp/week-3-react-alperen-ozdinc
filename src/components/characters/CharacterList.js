import CharacterCard from './CharacterCard';

function CharacterList({ characterList }){

    return (
        <div className="character-list">
        {characterList.map(character => {
            return (<CharacterCard character = {character} key={character.id}/>)
        })}
        </div>
    )
}

export default CharacterList;