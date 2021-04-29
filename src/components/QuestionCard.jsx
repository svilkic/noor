import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const QuestionCard = ({ answer, color = "gray", question }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="questionCard"
      style={{ borderLeft: `10px solid ${color}` }}
      onClick={() => setDisplay(!display)}
    >
      <div className="d-flex just-between align-center">
        <h4 className="text-start m0">
          <>{question}</>
        </h4>
        <MdAddCircleOutline />
      </div>
      <p className="text-start muted paragraph mt1" hidden={!display}>
        {answer}
      </p>
    </div>
  );
};

export default QuestionCard;
