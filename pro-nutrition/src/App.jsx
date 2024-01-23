import "./App.css";
import Search from "./components/Search";
import FoodBox from "./components/FoodBox";
import FoodData from "../resources/FoodData.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const filteredFoodData = FoodData.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Pro Nutrition</h1>
      <Search setSearch={setSearch} />
      {filteredFoodData.length > 0 ? (
        filteredFoodData.map((e, i) => <FoodBox key={i} data={e} index={i} />)
      ) : (
        <h1>No matching items found.</h1>
      )}
    </>
  );
}

export default App;
