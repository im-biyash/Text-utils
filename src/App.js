import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1f53";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textutils-darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="Textutils"
        aboutText="About textutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route path="/about" mode={mode} element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="TextForm Heading" mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
