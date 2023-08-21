import "./App.css";
import { Routes, Route } from "react-router-dom";
import Foreword from "./components/pages/Foreword";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";

import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  };
  return (
    <div className="container is-fluid App">
      <div className="select is-dark">
        <select value={lang} onChange={handleLangChange}>
          <option value="tr">Tr</option>
          <option value="en">En</option>
        </select>
      </div>
      <Routes>
        <Route path="/page-1" element={<Foreword lang={lang} />} />
        <Route path="/page-2" element={<Page2 lang={lang} />} />
        <Route path="/page-3" element={<Page3 lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
