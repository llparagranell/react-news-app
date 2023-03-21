import axios from "axios";
import React, { useEffect, useState } from "react";
import CricketComp from "./CricketComp";
import '../css/Cricket.css'

function Cricket() {
  const [cricket, setCricket] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.cricapi.com/v1/cricScore?apikey=7921d627-feaf-4b77-96ac-d391b2608cee "
      )
      .then((res) => {
        setCricket(res.data.data);
        console.log(res.data);
      });
  },[])
  return <div className="mc">
    <h3>Up Comming Matches</h3>
    {cricket.map((e)=>{
    return(
     <CricketComp t1={e.t1} t2={e.t2} matchType={e.matchType} status={e.status} t1img={e.t1img} t2img={e.t2img}/>
    )
    })}
  </div>;
}

export default Cricket;
