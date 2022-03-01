import React, { useState } from 'react'
import './LandingPage.css';
import WordChecking from '../WordChecking/WordChecking';

function LandingPage() {
  const result = ['', 'a', 'a', 'a', 'a', 'a']

  const [Show0, setShow0] = useState(true);
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);

  let BoxColor = "";

  const resultCheck = () => {
    (Show1 ? (Show2 ? (Show3 ? (Show4 ? alert("WOW!") : setShow4(true)) : setShow3(true)) : setShow2(true)) : setShow1(true));
  }

  const frontValue = e => {
    console.log(e);
    for (let i = 1; i <= 5; i++){
      if (e[i] === result[i]) {
        // console.log('success:', i, e[i]);
        BoxColor += 1;
      } else {
        BoxColor += 0;
      }
    }
    console.log(BoxColor);
    resultCheck();
  }

  return (
    <div className='app'>
      <WordChecking propValue={frontValue} Disabled={Show0} />
      {Show1 && <WordChecking propValue={frontValue} Disabled={Show1} />}
      {Show2 && <WordChecking propValue={frontValue} Disabled={Show2} />}
      {Show3 && <WordChecking propValue={frontValue} Disabled={Show3} />}
      {Show4 && <WordChecking propValue={frontValue} Disabled={Show4} />}

      <div>
        <button onClick={frontValue}>결과</button>
      </div>

    </div>
  )
}

export default LandingPage