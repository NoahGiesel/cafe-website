import React from 'react'; 
import "./Navigation.css";  
 
function Navigation() {
 
 
  return (
    <div className="navigation">
      <img alt="logo_img" src={require("../../img/logo-site.png")} /> 
        {/* img needs require for webpack recognizing the img */ }
        <div className="menu effect">
          <ul>
            <li><a href="/#">Products</a></li>
            <li><a href="/#">Features</a></li>
            <li><a href="/#">Guide</a></li>
            <li><a href="/#">Download</a></li>
          </ul>
        </div>
      <button>contact us </button>   
      </div>
  );
}

export default Navigation;
