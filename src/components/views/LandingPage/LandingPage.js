import React, { useState } from 'react'
import './LandingPage.css';
import WordChecking from '../WordChecking/WordChecking';

function LandingPage() {
  const [Value, setValue] = useState("");
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);



  // const handleChange = e => {
  //   const { maxLength, value } = e.target;
  //   if (value.length >= maxLength) {
  //     e.target.nextSibling.focus();
  //   }
  //   setValue({ ...Value, [e.target.name]: value });
  // }

  // const checkKeyPress = e => {
  //   if (e.keyCode === 8 && e.target.value.length <= 0) {
  //     e.target.previousSibling.focus();
  //   } else if (e.key === 'Enter') {
  //     clickResult();
  //   }
  // }

  // const clickResult = () => {
  //   console.log(Value);
  //   for (let i = 1; i <= 5; i++) {
  //     if (Value[i] === undefined || Value[i] === '') {
  //       alert('Full all!!!!');
  //       return 0;
  //     }
  //   }
  //   // console.log(Value);
  //   setShow1(true);
  //   return console.log(Value)
  // }

  const frontValue = e => {
    console.log(e);
    (Show1 ? (Show2 ? (Show3 ? (Show4 ? alert("WOW!") : setShow4(true)) : setShow3(true)) : setShow2(true)) : setShow1(true));
  }

  return (
    <div className='app'>
      <WordChecking propValue={frontValue} />
      {Show1 && <WordChecking propValue={frontValue}  />}
      {Show2 && <WordChecking propValue={frontValue}  />}
      {Show3 && <WordChecking propValue={frontValue}  />}
      {Show4 && <WordChecking propValue={frontValue}  />}

      <div>
        <button onClick={frontValue}>결과</button>
      </div>

    </div>
  )
}

export default LandingPage