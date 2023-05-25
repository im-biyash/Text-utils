import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleupclick = () => {
  
    console.log("uppercase was clicked");
    if (text.trim()==="")
    {
      props.showAlert("please enter something");
      return;
    }
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Uppercase mode has been enabled", "success");
  };

  const handleuloclick = () => {
    console.log("lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Lowercase mode has been enabled", "success");
  };

  const handleclearclick = () => {
    console.log("clear text was clicked");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared", "success");
  };

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Inverse mode has been enabled", "success");
  };

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "light",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          convert to uppercase
        </button>
        <button className="btn btn-danger" onClick={handleuloclick}>
          convert to lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclearclick}>
          clear text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleinverseclick}>
          inverse text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!=0})

          .length} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h1>Text preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
