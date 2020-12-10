import React, { useState, useRef } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const refcontainer = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refcontainer.current.value);
    console.log(data.slice(0, count));
    let newText = [];
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    for (let i = 0; i <= amount - 1; ) {
      const index = Math.floor(Math.random() * data.length);
      newText.push(data[index]);
      i += 1;
    }
    setText(newText);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form action="#" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          ref={refcontainer}
          name="amount"
          id="amount"
          value={count}
          min="0"
          max="50"
          onChange={(e) => {
            // setCount(e.target.value);
            setCount(refcontainer.current.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
