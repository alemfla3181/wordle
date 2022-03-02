import React, { useState } from 'react'
import './LandingPage.css';
import WordChecking from '../WordChecking/WordChecking';

function LandingPage() {
  const [Show0, setShow0] = useState(true);
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);

  

  const resultCheck = () => {
    (Show1 ? (Show2 ? (Show3 ? (Show4 ? alert("WOW!") : setShow4(true)) : setShow3(true)) : setShow2(true)) : setShow1(true));
  }

  return (
    <div className='app'>
      <h2 className='title'>Dordle</h2>
      <h2 className='title'>Dordle</h2>

      <WordChecking result={resultCheck} Disabled={Show0} />
      {Show1 && <WordChecking result={resultCheck} Disabled={Show1} />}
      {Show2 && <WordChecking result={resultCheck} Disabled={Show2} />}
      {Show3 && <WordChecking result={resultCheck} Disabled={Show3} />}
      {Show4 && <WordChecking result={resultCheck} Disabled={Show4} />}

      <div>
        <button>결과</button>
      </div>

    </div>
  )
}

export default LandingPage