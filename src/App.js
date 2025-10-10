import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  const toggleMode = (color) => {
    if (color === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#0C0950";
      document.body.style.color = "white";
      showAlert("Dark Blue Mode has been Enabled now!", "success");
    } else if (color === "green") {
      setMode("green");
      document.body.style.backgroundColor = "#0A400C";
      document.body.style.color = "#DBE4C9";
      showAlert("Green Mode has been enabled!", "success");
    } else if (color === "red") {
      setMode("red");
      document.body.style.backgroundColor = "#3E0703";
      document.body.style.color = "white";
      showAlert("Red Mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#EDEDED";
      document.body.style.color = "#0C0950";
      showAlert("Light Mode has been Enabled now!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
              <Route path="/" 
                  element={
                  <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  heading="TextMann - Word Counter & Text Manipulation "
                />
                  } 
                   />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
