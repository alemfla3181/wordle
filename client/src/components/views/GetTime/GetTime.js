import React, { useState, useEffect } from 'react'
import moment from 'moment';

function GetTime() {
  const nowTime = moment();
  const nextTime = JSON.parse(window.localStorage.getItem("Time")) || moment().add(3, 'minutes');
    //.format("YYYMMDD HH:mm:ss")
  useEffect(() => {
    if(nowTime.isAfter(nextTime)){
      window.localStorage.clear();
      console.log("초기화");
    } else {
      if (window.localStorage.getItem("Time")) {
        console.log("이미있음");
      } else {
        window.localStorage.setItem("Time", JSON.stringify(nextTime));
        // console.log(window.localStorage.getItem("Time").split("").splice(10, 8).join(""));
        console.log("시간저장");
      }
    }
    
  },[])

  return (
    <div></div>
  )
}

export default GetTime