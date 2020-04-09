import React from 'react';
import './App.css';
import Header from "./Components/Nav-Bar/Navigation"
import LandingPage from "./Components/Landing-Page/LandingPage"

function App() {
  return (
    <div className="App">
      <Header /> 
      <LandingPage />
    </div>
  );
}

export default App;
