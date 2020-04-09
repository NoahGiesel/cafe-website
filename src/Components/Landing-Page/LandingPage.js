import React from 'react'; 
import "./LandingPage.css"



function LandingPage() {
  return (
    <div className="landingpage">  
      <div className="first-element">
        <h1>One space to rule them all</h1>
        <p>We bring all team's concepts together while letting you use the tools you love...</p>
      </div>
      <img alt="landing_section" src={require("../../img/landing_page.png")} / > 
    </div>
  );
}

export default LandingPage;
