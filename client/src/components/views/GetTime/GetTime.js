import React, { useState, useEffect } from 'react'
import moment from 'moment';

function GetTime(props) {
  const resetTime = JSON.parse(window.localStorage.getItem("Time")) || moment().endOf('day').format("YYYY-MM-DD HH:mm:ss");
  const [OnReset, setOnReset] = useState(false);

  useEffect(() => {
    if (props.Reset) {
      setOnReset(false);
    }
    if (moment().isAfter(resetTime)) {
      console.log("시간경과");
      props.OnReset(OnReset);
      setOnReset(true);
    } else {
      if (window.localStorage.getItem("Time")) {
        console.log("이미있음");
      } else {
        window.localStorage.setItem("Time", JSON.stringify(resetTime));
        console.log("시간저장");
      }
    }
  },[])
  
  return (
    <div></div>
  )
}

export default GetTime