# Birthday reminder with react

using react `useState()` which facinates me alot

## useState

to use `useState()`, we import it from react `import React, {useState} from "react"`
notes for self:

1. must be used inside the components using it.
2. useState is a function
3. it takes any form of data
4. return an array of two elements:
   1. the `data` passed in it
   2. the default `set[Data]()` function which can be called whatever you want

this is use for Rerendering your data to the DOM

### destructuring useState(Value)

note:-> value is a parameter

> `const [value, setValue] = useState(data)`

### useState() example :

let assume we have a UI that displays a person data increase every time a button (ASUU) is clicked

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

const personData = {
  name: "Hassan Ibrahim",
  major: "Computer science",
  interests: [
    "Turn coding into an habit/addiction",
    "read more books",
    "money",
    "travel around the world",
  ],
  gradYear: 2020,
};

const App = () => {
  const [person, setPerson] = useState(personData); // useState returns an array
  return (
    <main>
      <section className="container">
        <Person person={person} />
        <button
          onClick={() => {
            setPerson((prevPerson) => {
              let newGradYear = prevPerson.gradYear + 1; // increase gradiduation year by one
              return { ...prevPerson, gradYear: newGradYear }; // setPerson works like resetting the useState again with the new values giving
            });
          }}
        >
          ASUU
        </button>
        <button
          onClick={() => {
            setPerson({ ...person, gradYear: 2020 });
          }}
        >
          NO ASUU
        </button>
      </section>
    </main>
  );
};

//2. create a component a component for person

function Person(props) {
  const { person } = props;
  //props is an object so we need to destructure it to get person object passed in
  // const { person } = person;
  //lets say your component takes an object as props (parameter)
  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.major}</h4>
      <ul>
        {person.interests.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <p>gradution year : {person.gradYear}</p>
    </>
  );
}

ReactDOM.render(<App />, root);
```
