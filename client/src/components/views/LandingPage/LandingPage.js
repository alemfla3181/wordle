import React, { useState, useEffect } from 'react'
import './LandingPage.css';
import BoxChecking from '../BoxChecking/BoxChecking';

function LandingPage() {
  const [Show, setShow] = useState(() => JSON.parse(window.localStorage.getItem("Show")) || [false]);
  const [Value, setValue] = useState(() => JSON.parse(window.localStorage.getItem("Value")) || []);
  const [BoxColor, setBoxColor] = useState(()=> JSON.parse(window.localStorage.getItem("BoxColor")) || []);
  useEffect(() => {
    window.localStorage.setItem("Show", JSON.stringify(Show));
    window.localStorage.setItem("Value", JSON.stringify(Value));
    window.localStorage.setItem("BoxColor", JSON.stringify(BoxColor));
  },);
  

  const nextBoxOpen = () => {
    const New = Show.concat(false);
    New[New.length - 2] = true;
    (Show[0] ? (Show[1] ? (Show[2] ? (Show[3] ? (Show[4] ? alert("WOW!") : setShow(New)) : setShow(New)) : setShow(New)) : setShow(New)) : setShow(New));
  }

  const setChangeValue = e => {
    const New = Value.concat(e);
    setValue(New);
  }

  const setChangeBox = e => {
    const New = [].concat(e);
    setBoxColor([...BoxColor,New]);
  }

  return (
    <div>
      <div className='app'>
        <h2>Wordle</h2>
        <h2>Wordle</h2>

        <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[0]} Values={Value[0]} Disabled={Show[0]} />
        {Show[0] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[1]} Values={Value[1]} Disabled={Show[1]} />}
        {Show[1] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[2]} Values={Value[2]} Disabled={Show[2]} />}
        {Show[2] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[3]} Values={Value[3]} Disabled={Show[3]} />}
        {Show[3] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[4]} Values={Value[4]} Disabled={Show[4]} />}
      </div>
    </div>
  )
}

export default LandingPage