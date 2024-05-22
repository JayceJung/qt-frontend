import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainContent from "./MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <MainContent/>
    </Router>
  )  
}

export default App;
