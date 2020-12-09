import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [text, setText] = useState("");

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
    // if (isOpen) {
    //   setText("");
    // } else setText(info);
  };
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleQuestion}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p> {info} </p>}
    </div>
  );
};

export default Question;
