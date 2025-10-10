import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter some Text ");

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
    let copy = document.getElementById("myBox");
    copy.select();
    copy.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copy.value);
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
            style={{
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
          ></textarea>{" "}
        </div>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}}  onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleRevClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleUpLoClick}>
          Alternate Text
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}} onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          style={{backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary', color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'}}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container mb-y">
        <h2>Your Summary</h2>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((word) => word.length !== 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <h4>Read Time</h4>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h4>Preview</h4>
        <p>
          {text === ""
            ? "Enter Something in the Textbox above to see text here"
            : text}
        </p>
      </div>
    </>
  );
}
