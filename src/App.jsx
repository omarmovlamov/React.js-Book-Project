import "./App.css";
import { Routes, Route } from "react-router-dom";
import Foreword from "./components/pages/Foreword";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import Page5 from "./components/pages/Page5";
import Page6 from "./components/pages/Page6";
import Page7 from "./components/pages/Page7";
import Page8 from "./components/pages/Pages8";

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
        <Route path="/page-4" element={<Page4 lang={lang} />} />
        <Route path="/page-5" element={<Page5 lang={lang} />} />
        <Route path="/page-6" element={<Page6 lang={lang} />} />
        <Route path="/page-7" element={<Page7 lang={lang} />} />
        <Route path="/page-8" element={<Page8 lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
