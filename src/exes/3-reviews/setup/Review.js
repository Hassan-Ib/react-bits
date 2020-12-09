import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (index, len) => {
    if (index < 0) {
      return len - 1;
    } else if (index > len - 1) {
      return len - len;
    }
    return index;
  };

  const nextPerson = (value = "next") => {
    const len = people.length;
    let newIndex = index;
    if (value === "prev") {
      newIndex -= 1;
    } else if (value === "random") {
      let randomNum = Math.floor(Math.random() * len);
      if (newIndex === randomNum) {
        newIndex = randomNum + 1;
      } else {
        newIndex = randomNum;
      }
    } else {
      newIndex += 1;
    }
    setIndex(checkNumber(newIndex, len));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => nextPerson("prev")}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => nextPerson("random")}>
        suprice me
      </button>
    </article>
  );
};

export default Review;
