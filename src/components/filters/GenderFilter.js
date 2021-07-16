function GenderFilter({ changeHandler }) {
  const handleChange = (e) => {
    changeHandler(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <label htmlFor="gender">Gender:</label>
      <select name="gender" id="gender" onChange={handleChange} >
        <option value="">None</option>
        <option value="genderless">Genderless</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default GenderFilter;
