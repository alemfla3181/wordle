import React, { useState, useEffect } from 'react'
import { message } from 'antd';
import './LandingPage.css';
import BoxChecking from '../BoxChecking/BoxChecking';
import Modal from '../Modal/Modal';

function LandingPage() {
  const [Visible, setVisible] = useState(false);
  const [Disabled, setIsDisabled] = useState(() => JSON.parse(window.localStorage.getItem("Disabled")) || []);
  const [Show, setShow] = useState(() => JSON.parse(window.localStorage.getItem("Show")) || [false]);
  const [Value, setValue] = useState(() => JSON.parse(window.localStorage.getItem("Value")) || []);
  const [BoxColor, setBoxColor] = useState(()=> JSON.parse(window.localStorage.getItem("BoxColor")) || []);
  useEffect(() => {
    window.localStorage.setItem("Show", JSON.stringify(Show));
    window.localStorage.setItem("Value", JSON.stringify(Value));
    window.localStorage.setItem("BoxColor", JSON.stringify(BoxColor));
    window.localStorage.setItem("Disabled", JSON.stringify(Disabled));
  },[Show, Value, BoxColor, Disabled]);
  
  const showModal = () => {
    setVisible(true);
  }

  const nextBoxOpen = e => {
    const NewD = Disabled.concat(true);
    setIsDisabled(NewD);
    if (e) {
      showModal();
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else if(Show.length === 6 ){
      message.info("um..."); 
    }else{
      const New = Show.concat(false);
      New[New.length - 2] = true;
      (Show[0] ? (Show[1] ? (Show[2] ? (Show[3] ? (Show[4] ? alert("um...") : setShow(New)) : setShow(New)) : setShow(New)) : setShow(New)) : setShow(New));
    }
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
        <Modal visible={Visible}>Congratulations!</Modal>
        <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[0]} Values={Value[0]} Disabled={Disabled[0]} />
        {Show[0] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[1]} Values={Value[1]} Disabled={Disabled[1]} />}
        {Show[1] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[2]} Values={Value[2]} Disabled={Disabled[2]} />}
        {Show[2] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[3]} Values={Value[3]} Disabled={Disabled[3]} />}
        {Show[3] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[4]} Values={Value[4]} Disabled={Disabled[4]} />}
        {Show[4] && <BoxChecking result={nextBoxOpen} Text={setChangeValue} Box={setChangeBox} Colors={BoxColor[5]} Values={Value[5]} Disabled={Disabled[5]} />}
      </div>
    </div>
  )
}

export default LandingPage