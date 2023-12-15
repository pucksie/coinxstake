import { useCollapse } from "react-collapsed";

import "./FaqBox.css";
import { useState } from "react";
const FaqBox = ({ question, answer }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="question-box">
      <div
        className="question__title"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
        <h2 className="title">{question}</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={isExpanded ? "add-square rotate" : "add-square "}>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.707 9.293a1 1 0 00-1.414 0L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"></path>
        </svg>{" "}
      </div>
      <div className={"question__answer"} {...getCollapseProps()}>
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqBox;
