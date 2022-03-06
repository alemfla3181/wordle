import React from 'react';
import '../Modal/Modal.css';

function Modal(props) {
  // console.log(props);
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div>
      {props.visible ? (
        <section>
          <header>
          </header>
          <main>{props.header}</main>
          <footer>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;