import React from 'react';
import '../Modal/Modal.css';

function Modal(props) {
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={props.visible ? 'openModal modal' : 'modal'} >
      {props.visible ? (
        <section>
          <header>Modal window
          </header>
          <main>{props.children}</main>
          <footer>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;