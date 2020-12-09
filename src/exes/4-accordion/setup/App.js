import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answer about login</h3>
        <section>
          {questions.map((datum) => {
            return <SingleQuestion key={datum.id} {...datum} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
