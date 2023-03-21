import React from "react";
import "../css/Header.css";
import icon from '../icons/icon.png'

function Header() {
  return (
    <header >
      <div style={{padding:"4vh 5vh"}}>
      <div className="mar-div">
        <h1 className="inline heading">NewsApp</h1>
        <div className="search">
          <div className="inline right">
            <input placeholder="Search..."/>
          </div>
          <div className="inline right">
            <button className="btn-login"> <img src={icon} id="img"></img></button>
          </div>
        </div>
        </div>
      </div>
     

    </header>
  );
}

export default Header;
