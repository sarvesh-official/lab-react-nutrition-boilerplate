
import './App.css'
import Search from './assets/components/Search'
import FoodBox from './assets/components/FoodBox'
import foodData from "../resources/FoodData.js"
import { useState } from 'react'
function App() {

  const [search, setSearch] = useState("");
  let filteredArray =foodData.filter((e) => {
        return   e.name.toLowerCase().includes(search.toLowerCase())  
      })
  return (
    <>
      <h1>PRO NUTRITION 🎯</h1>
      <br />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <br />

      {filteredArray.length==0?<p>No results found</p> : filteredArray.map((e,i)=>{
        return <FoodBox data={e} index={i} key={ i} />
      })}
     

    </>
  )
}

export default App
