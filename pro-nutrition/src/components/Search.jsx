const Search = (props) => {
  const { setSearch } = props;
  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        style={{ width: "400px,", padding: "10px 40px", fontSize: "large" }}
        placeholder="Search Food Here..." onChange={(e)=>{
          setSearch(e.target.value)
        }}
      />
    </>
  );
};

export default Search;
