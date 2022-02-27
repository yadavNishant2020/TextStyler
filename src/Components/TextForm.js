import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleSenClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };
  const handleClrClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3" style={{color: props.mode==='dark'?'#B2B1B9':'black'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={handleOnChange}
             style={{backgroundColor: props.mode==='dark'?'#444444':'white', color:props.mode==='dark'?'#B2B1B9':'black'}} value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div style={{color: props.mode==='dark'?'#B2B1B9':'black'}}>
        <button className="btn btn-secondary mx-1 my-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-secondary mx-1 my-1 my-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-secondary mx-1 my-1 my-1" onClick={handleSenClick}>
          Convert to Sentance
        </button>
        <button className="btn btn-secondary mx-1 my-1 my-1" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-1 my-1 my-1" onClick={handleCopy}>
        Copy Text
        </button>
        <button className="btn btn-danger mx-1 my-1 my-1" onClick={handleClrClick}>
          Clear Text
        </button>
        <div className="container my-5">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length} words, {text.length} characters{" "}
          </p>
          <p>{0.008 * text.split(" ").length} Minutes reading time</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
      </div>
      </div>
    </>
  );
}
