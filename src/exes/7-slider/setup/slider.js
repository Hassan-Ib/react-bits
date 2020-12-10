import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      slideRight();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  const slideLeft = () => {
    if (index < 1) {
      return setIndex(people.length - 1);
    }
    setIndex(index - 1);
  };

  const slideRight = () => {
    if (index >= people.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const slideCalc = (id) => {
    let position = "nextSlide";

    if (id === index) {
      position = "activeSlide";
    }
    if (id < index || (index < 1 && id === people.length - 1)) {
      position = "lastSlide";
    }
    if (index === people.length - 1 && id === 0) {
      position = "nextSlide";
    }
    return position;
  };

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <button className="prev">
            <FiChevronLeft onClick={slideLeft} />
          </button>
          {people.map((person, personIndex) => {
            const { image, title, quote, id, name } = person;

            return (
              <article key={id} className={`person ${slideCalc(personIndex)}`}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <div className="text">
                  <p>{quote}</p>
                </div>

                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="next">
            <FiChevronRight onClick={slideRight} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
