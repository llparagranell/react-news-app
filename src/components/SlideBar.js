import React from "react";
import "../css/sidebar.css";
import { Link } from "react-router-dom";
function SlideBar() {

  return (
    <div className="sidebar">
      <section>
        <div className="head-list">
          <ul className="side-ul">
          <li className="side-li"><Link className="a" to="/">world</Link></li> 
            <li className="side-li"><Link className="a" to="/Business">Business</Link></li> 
            <li className="side-li"><Link className="a" to="/Entertainment">Entertainment</Link></li>
            <li className="side-li"><Link className="a" to="/Health">Health</Link></li>
            <li className="side-li"><Link className="a" to="/Science">Science</Link></li>
            <li className="side-li"><Link className="a" to="/Sports">Sports</Link></li>
            <li className="side-li"><Link className="a" to="/Technology">Technology</Link></li>
          </ul>
        </div>
        <div>
          <button className="btn">Login</button>
        </div>
      </section>
    </div>
  );
}
// : businessentertainmentgeneralhealthsciencesportstechnology. #000000CC
export default SlideBar;
