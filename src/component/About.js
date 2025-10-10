import React from "react";

export default function About(props) {
  
    let myStyle={
    backgroundColor: props.mode==='light'?'#D8D9CF':props.mode==='dark'?'#3E6D9C': props.mode==='green'?'#799351' : props.mode==='red'? '#A91D3A': 'primary',
    color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'
    }
    let myback={
        backgroundColor: props.mode==='light'?'#EDEDED':props.mode==='dark'?'#0C0950': props.mode==='green'?'#0A400C' : props.mode==='red'? '#3E0703': 'primary',
    color: props.mode==='light'?'black':props.mode==='dark'? 'white':props.mode==='green'?'black':props.mode==='red'?'white':'black'
    }

  return (
    <>
      <div className="container" >
        <h1 className="my-3" style={myback}>
          About Us
        </h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
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
                <strong>What is TextMann?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextMann is a simple yet powerful text analyzer tool. You can modify, format, and optimize your text instantly, convert to uppercase or lowercase, remove extra spaces, count words and characters, and much more. Whether you're writing content, coding, or just experimenting with text, TextMann helps make your writing cleaner and smarter.
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
               <strong>How to use TextMann?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
               Simply type or paste your text in the box, then use the available tools to transform or analyze it instantly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
               <strong>Contact Us</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
               Have questions or feedback? Reach out to us anytime, we’d love to hear from you!
                You can contact our team through email or social platforms.
                We’ll respond as soon as possible to assist you with your queries.              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
