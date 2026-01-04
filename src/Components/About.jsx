import React, { useState } from "react";

function About({ mode }) {
  let myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#1c6bbaff" : "white",
    fontSize: "20px",
    // border: "1px solid white",
  };

  // const [myStyle, setStyle] = useState({
  //   color: mode === "black" ? "white" : "black",
  //   backgroundColor: mode === "black" ? "black" : "white",
  //   // border: "1px solid white",
  // });

  return (
    <>
      <div className="container my-3 py-3" style={{ myStyle }}>
        <h1
          className="fw-bolder fs-2"
          style={{
            backgroundColor: mode === "dark" ? "#0d355e" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={{ myStyle }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong className="fs-4">Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ myStyle }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong className="fs-4">Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ myStyle }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong className="fs-4">Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
