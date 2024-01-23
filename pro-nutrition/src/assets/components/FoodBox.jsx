import { useState } from "react";


const FoodBox = (props) => {
    
    let { data, index } = props
    let { cal, id, img, name } = data
    
    const [input,setInput] = useState(0)
    const [quantity, setQuantity] = useState(0)
    
    const quantityHandler=()=>{
            setQuantity(input)
    }

    return (
        <div className="foodBox-main" key={id}>
            <div className="foodBox-main-left">
                <img src={img} />
                <div className="foodBox-main-left-1">
                    <h1>{name}</h1>
                    <h1>{cal}</h1>
                </div>
                    <div className="foodBox-main-left-2">
                    <input type="number" min={0}
                        onChange={(e) => {
                            setInput(e.target.value)
                            
                        }}
                    value={input}
                    />
                    <button onClick={quantityHandler} className="add">+</button>
                    </div>
            </div>
            <div className="foodBox-main-right">
                <h4>{name} X {input} = { cal * input}</h4>
                <button onClick={(() => {
                    setQuantity(0)
                    setInput(0)
                })}>R E S E T</button>
            </div>
        </div>
    )
}

export default FoodBox;