import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // props are always objects that needs to destructured
        const { name, image, age, id } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            {console.log(image)}
          </article>
        );
      })}
    </>
  );
};

export default List;
