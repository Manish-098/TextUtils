import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";

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
      document.body.style.backgroundColor = "#0d355e";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <HashRouter>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <TextForm
        showAlert={showAlert}
        heading="Enter the text blow"
        mode={mode}
      /> */}
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces"
              mode={mode}
            />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
