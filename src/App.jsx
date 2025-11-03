import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#28527cff";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };

  const GreenMode = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#4e8242ff";
      document.title = "TextUtils- Green Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils- Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        home="Home"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        GreenMode={GreenMode}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text blow"
        mode={mode}
      />
      {/* <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text blow"
              mode={mode}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
