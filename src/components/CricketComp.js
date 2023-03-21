import React from "react";
import "../css/Cricket.css";

function CricketComp(props) {
  return (
    <div className="comp">
      <div className="cricket">
        <div>
        <img className="cric-img" src={props.t1img} alt='img'/>
        <p className="cric-p">{props.t1}</p>
        </div>
        <div>
        <img className="cric-img" src={props.t2img} alt='img'/>
        <p className="cric-p"> {props.t2}</p>
        </div>
      </div>

      <div className="cricket">
        <p className="cric-p">{props.status}</p>
        <p className="cric-p odi">{props.matchType}</p>
      </div>
    </div>
  );
}

export default CricketComp;
