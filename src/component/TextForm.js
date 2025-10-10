import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newt = text.toUpperCase();
    setText(newt);
    props.showAlert("Text Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newt = text.toLowerCase();
    setText(newt);
    props.showAlert("Text Converted to Lowercase!", "success");
  };

  const handleOnClick = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared!", "success");
  };

  const handleRevClick = () => {
    let newSt = text.split("").reverse().join("");
    setText(newSt);
    props.showAlert("Reversed!", "success");
  };

  const handleUpLoClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Content Alternated!", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  return (
    <>
      <div onClick={props.toggleMode} className="container">
        <h2 className="my-4 text-center">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            placeholder="Enter some Text here..."
            style={{
                border: '2px solid',
              backgroundColor:
              props.mode === "light"
                  ? "#EEEEEE" :
                props.mode === "dark"
                  ? "#BAD7E9"
                  : props.mode === "green"
                    ? "#DBE4C9"
                    : props.mode === "red"
                      ? "#B03052"
                      : "white",
              color:
                props.mode === "dark"
                  ? "black"
                  : props.mode === "green"
                    ? "black"
                    : props.mode === "light"
                      ? "#0C0950"
                      : "white",
            }}
            className="form-control"
            onChange={handleOnClick}
            value={text}
            id="myBox"
            rows="4"
          ></textarea>{" "}
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}}  onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleRevClick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleUpLoClick}>
          Alternate Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length===0}
          style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container mb-y">
        <h4>Word Counter</h4>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <h4>Read Time</h4>
        <p>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} minutes</p>
        <h4>Preview</h4>
        <p>
          {text === ""
            ? "Nothing to Preview!"
            : text}
        </p>
      </div>
    </>
  );
}
