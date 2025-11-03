import React, { useState } from "react"; // {useState} is hookName
import Button from "./Button";
import TextSummary from "./TextSummary";
import Preview from "./Preview";

function TextForm(props) {
  const [Text, setText] = useState(""); //This is Hooks
  const updateContent = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-2">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1
              className={`fw-bold text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              {props.heading}
            </h1>
          </label>
          <textarea
            className={`form-control overflow-auto bg-${
              props.mode === "dark" ? "secondary" : "white"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            value={Text}
            onChange={updateContent}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
      </div>
      <Button
        showAlert={props.showAlert}
        text={Text}
        setValue={setText}
      ></Button>
      <TextSummary text={Text} mode={props.mode}></TextSummary>
      <Preview text={Text} mode={props.mode}></Preview>
    </>
  );
}

export default TextForm;
