import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import Intro3 from "./pages/Intro3";
import Exercise from "./pages/Exercise";
import Congrats from "./pages/Congrats";
import ToolList from "./pages/ToolList";

function App() {

  return (
    <div className="frame">      
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/intro-1" replace />} />
          <Route path="/tool-list" element={<ToolList />} />
          <Route path="/intro-1" element={<Intro1 />} />
          <Route path="/intro-2" element={<Intro2 />} />
          <Route path="/intro-3" element={<Intro3 />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
