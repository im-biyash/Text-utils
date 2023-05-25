import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setnewstyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
   let myStyle ={
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "white" ? "black" : "white"
   
  };
  return (
    <div className="container" style={myStyle}>
      <h1>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Review your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style ={myStyle}>
              <strong>
                This app allows you to analyze your text and helps to convert
                your text the way you like.
              </strong>{" "}
              It is
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This app is totally free to use.</strong> it doesnt cost
              any mone. IT is totally free. it doesnt cost any money its good
              for everyone
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatibility</strong>          
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                This app is very much compatible with any browser.IT doesnt have
                any browser restriction.
              </strong>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  }