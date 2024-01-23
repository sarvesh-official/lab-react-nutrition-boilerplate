import { useState } from "react";

const FoodBox = (props) => {
  let {data, index} = props
  let {cal, id, img, name} = data

  const [input, setInput] = useState(0)
  const [quantity, setQuantity] = useState(0)

  function quantityHandler(){
    setQuantity(input)


  }

  return (
    <>
      <div className="foodbox-main" key={index}>
        <div className="foodbox-main-left">
          <img src={img} alt="" />
          <div>
            <h1>{name}</h1>
            <h2>Calories: {cal}</h2>
          </div>
          <div>
            <input type="number" min="0" onChange={(e)=>{
              setInput(e.target.value)
            }} value={input} />
            <button className="add" onClick={quantityHandler}>+</button>
          </div>
        </div>
        <div className="foodbox-main-right">
          <h4>{name} x {quantity} = {cal*quantity} calories</h4>
          <button className="reset" onClick={()=>{
            setQuantity(0)
            setInput(0)
          }}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default FoodBox; 

