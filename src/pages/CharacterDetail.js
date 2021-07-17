import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getSingleCharacter } from '../services/api-service';
import SingleCharacter from '../components/characters/SingleCharacter';

function CharacterDetail() {
    let { id } = useParams();
    const [singleCharacter, setSingleCharacter] = useState(null);
    useEffect(() => {
        getSingleCharacter(id).then(res => {
            setSingleCharacter(res);
        })
    },[])
    
    return (
        <div className="app-main">
            {singleCharacter ? <SingleCharacter character={singleCharacter}/> : null }
        </div>
    )
}

export default CharacterDetail;