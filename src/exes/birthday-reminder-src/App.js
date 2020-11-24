import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        <List people={people} />
        <button
          onClick={() => {
            setPeople((prevState) => {
              let newState = prevState.map((el) => {
                el.age += 1;
                return el;
              });
              newState = newState.filter((person) => person.age > 30);
              return newState;
            });
          }}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
