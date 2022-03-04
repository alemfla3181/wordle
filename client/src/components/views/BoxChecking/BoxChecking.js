import React, { useEffect, useState } from 'react'
import './BoxChecking.css';
import *as Source from '../../source/Source';
import *as WordChecking from '../WordChecking/WordChecking.js';

function BoxChecking(props) {
  const [BoxColor, setBoxColor] = useState(() => JSON.parse(window.localStorage.getItem("BoxColor")) || []); 
  const [Value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const answerResult = Source.f1();
  const [Input, setInput] = useState([]);

  useEffect(() => {
    if (props.Values) {
      setInput(" "+props.Values);
    }
  },[]);
  

  const handleChange = e => {
    const { maxLength, name, value } = e.target;
    if (value.length >= maxLength && e.target.nextSibling !== null) {
      e.target.nextSibling.focus();
    }
    setInput({ ...Input, [name]: value, });
    console.log(Input);
    setValue({ ...Value, [e.target.name]: value });
  }

  const checkKeyPress = e => {
    if (e.keyCode === 8 && e.target.value.length <= 0 && e.target.previousSibling !== null) {
      e.target.previousSibling.focus();
    } else if (e.key === 'Enter') {
      clickResult();
    }
  }

  // 결과 버튼 클릭
  const buttonClick = () => { 
    clickResult();
  }

  // 정답 확인
  const clickResult = () => {
    for (let i = 1; i <= 5; i++) {
      if (Value[i] === undefined || Value[i] === '') {
        alert('Full all!!!!');
        return 0;
      }
    }
    WordChecking.f1(Value).then(e => {
      if(e) {
        frontValue(Value);
        setIsDisabled(props.Disabled);
      } else {
        alert('Not Word!!!!');
        return 0;
      }  
    });
  }

  const frontValue = e => {
    let array = ['']; // 0은 공백 1부터 시작
    for (let i = 1; i <= 5; i++){
      if (answerResult.includes(e[i])) {
        array[i] = 'yellow';
      } else {
        array[i] = 0;
      }
      if (e[i] === answerResult[i]) {
        array[i] = 'green';
      }
    }
    setBoxColor(array);
    props.result();

    let Text = "";
    for (let i in Value) {
      Text += Value[i];
    }

    props.Text(Text);
    // window.localStorage.setItem("Value", JSON.stringify(Text));
    // window.localStorage.setItem("BoxColor", JSON.stringify(array));
  }

  return (
    <div>
      <input name='1' className={BoxColor[1]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={(props.Disabled ? props.Disabled : isDisabled)} value={Input[1]} autoFocus ></input>
      <input name='2' className={BoxColor[2]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={(props.Disabled ? props.Disabled : isDisabled)} value={Input[2]} ></input>
      <input name='3' className={BoxColor[3]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={(props.Disabled ? props.Disabled : isDisabled)} value={Input[3]} ></input>
      <input name='4' className={BoxColor[4]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={(props.Disabled ? props.Disabled : isDisabled)} value={Input[4]} ></input>
      <input name='5' className={BoxColor[5]} maxLength={1} onChange={handleChange} onKeyDown={checkKeyPress} disabled={(props.Disabled ? props.Disabled : isDisabled)} value={Input[5]} ></input>

      <div>
        <button onClick={buttonClick} disabled={(props.Disabled ? props.Disabled : isDisabled)}>결과</button>
      </div>
    </div>
    
  )
}

export default BoxChecking