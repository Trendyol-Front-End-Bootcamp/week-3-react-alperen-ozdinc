import './FilterSection.css';
import GenderFilter from '../GenderFilter';
import StatusFilter from '../StatusFilter';

function FilterSection({genderFilter, statusFilter, filterHandler}){
    const handleClick = () => {
        filterHandler();
    }
    return (
        <div className="filter-section">
            <GenderFilter changeHandler = {genderFilter}/>
            <StatusFilter changeHandler = {statusFilter}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )

}

export default FilterSection;