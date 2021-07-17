
function StatusFilter({changeHandler}){
    const handleChange = (e) => {
        changeHandler(e.target.value);
        console.log(e.target.value);
      };
    return (
        <div className="filter-select">
            <label htmlFor="status">Status:</label>
            <select name="status" id="status" onChange={handleChange}>
                <option value="">None</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    )
}

export default StatusFilter;