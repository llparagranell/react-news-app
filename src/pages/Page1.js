import React from "react";
import "../css/Page1.css";

function Page1(props) {
  return (
    <div className="page-card">
      <p className="card-title mar">{props.title}</p>
      <img className="card-img mar" src={props.image}></img>
      <p className="card-author mar">{props.author}</p>
      <p className="card-des mar">{props.description}</p>
    </div>
  );
}

export default Page1;
