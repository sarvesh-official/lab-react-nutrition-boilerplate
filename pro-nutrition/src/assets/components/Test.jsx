import React, { Fragment, useEffect, useState } from "react";

function Test() {
  const [answer, setAnswer] = useState("");
  const [value, setValue] = useState("");
  const [option, setOption] = useState(1);

  useEffect(() => {
    // Call list2() to update the displayed elements
    list2();
  }, [option, value]); // Add value as a dependency

  const list2 = () => {
    return (
      <Fragment>
        {" "}
        {/* Use Fragment to group elements without extra wrapper */}
        {Array.from({ length: option }, (_, i) => (
          <p key={i}>{value}</p>
        ))}
      </Fragment>
    );
  };

  return (
    <div>
      <label htmlFor="">Example</label>
      <input type="text" onChange={(e) => setAnswer(e.target.value)} />
      <select
        name=""
        id=""
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={() => setValue(answer)}>Submit</button>
      <div className="answer">{list2()}</div>
    </div>
  );
}

export default Test;
