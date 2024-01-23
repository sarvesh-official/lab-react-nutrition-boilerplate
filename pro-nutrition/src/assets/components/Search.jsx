const Search = (props) => {
const {setSearch} = props

    return <>
        <h1>Search</h1>
        <br />
        <br />
        <input type="text" placeholder="Search Here 🍓"
            style={{ width: "400px", padding: "10px 40px", fontSize: "large" }}
            
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            />
            {/* <p id="notFound">No results found</p> */}
    </>
}

export default Search