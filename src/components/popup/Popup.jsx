import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = () => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <p>Do you want to delete all?</p>
        <div className="yes-no-btns">
          <button id={"yes-btn"}>Yes</button>
          <button id={"no-btn"}>No</button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {};

export default Popup;
