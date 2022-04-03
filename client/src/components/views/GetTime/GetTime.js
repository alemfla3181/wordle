import React, { useState, useEffect } from 'react'
import moment from 'moment';

function GetTime(props) {
  const nowTime = moment();
  const nextTime = JSON.parse(window.localStorage.getItem("Time")) || moment().add(10, 'seconds');
  const [OnReset, setOnReset] = useState(false);
    //.format("YYYMMDD HH:mm:ss")
  useEffect(() => {
    if (props.Reset) {
      setOnReset(false);
    }
    if (nowTime.isAfter(nextTime)) {
      console.log("시간경과");
      props.OnReset(OnReset);
      setOnReset(true);
    } else {
      if (window.localStorage.getItem("Time")) {
        console.log(nowTime.format("YYYMMDD HH:mm:ss"));
        console.log("이미있음");
      } else {
        window.localStorage.setItem("Time", JSON.stringify(nextTime));
        // console.log(window.localStorage.getItem("Time").split("").splice(10, 8).join(""));
        console.log("시간저장");
      }
    }
  },[OnReset])
  
  return (
    <div></div>
  )
}

export default GetTime