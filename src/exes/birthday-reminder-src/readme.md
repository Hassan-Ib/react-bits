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

> `const [value, setValue] = useState(data)`>

### useState() example :

let say i have person object with some data and graduation year which are data rendered to the DOM and want the graduation year to increases every time a button (ASUU) is clicked

```javascript
person =
{   name: 'Hassan Ibrahim',
    major: 'Computer science',
    interests: ['Turn coding into an habit/addiction','read more books', 'money', 'travel around the world'],
    gradYear: 2020
}

// 1. import React and useState:

    import React, {useState} from "react"

//2. create a component and remeber useState can only be used in your components and components //starts with uppercase letter

const Comp = ({person})=>{
    //lets say your component takes an object as props (parameter)
    const [person, setPerson] = useState(person);
    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.major}</h2>
            <ul>{person.interest.map((el,index)=> <li key={index}>el</li>)}</ul>
            <p>{person.gradYear}</p>
            <button onClick={()=>{
                setPerson({...person,person.gradYear+1})
                //or setPerson((prevData)=>{return {...prevData,prevData.gradYear + 1}})
                }}></button>
        </>
    );
}
```
