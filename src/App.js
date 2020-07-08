import React from 'react';
import Layout from "./Layout";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Layout/>
      </Router>
      
    </div>
  );
}

export default App;
