import React, { useState } from "react";
import "./addStar.style.css";

const AddStar = () => {
  const [starList, setStarList] = useState([]);

  const onClickHandler = () => {
    setStarList([...starList, "⭐️"]);
  };

  const onClickDelete = () => {
    setStarList([...starList.slice(1)]);
  };

  return (
    <div className="container">
      <button id={"add-star-btn"} onClick={onClickHandler}>
        ADD STAR
      </button>
      <div className="stars-box">
        {starList.map((el) =>
          starList.length ? (
            <p id={"star"} onClick={onClickDelete}>
              {el}
            </p>
          ) : null
        )}
      </div>
      <p id="total-star">Total: {starList.length}</p>
    </div>
  );
};

export default AddStar;
