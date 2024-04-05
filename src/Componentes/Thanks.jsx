import React from "react";
import '../styles/Thanks.css'
import check from '../assets/icon-list.svg'
const Thanks = ({handleReturn, text}) =>{
  return(
    <div className="cardThanks-container">
      <div className="top">
        <img src={check}/>
      </div>
      <div className="mid">
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{text}</strong>. Please open it
          and click the button inside to confirm your subscription
        </p>
      </div>
      <div className="bottom">
        <button onClick={handleReturn}>Dismiss message</button>
      </div>
    </div>
  )
}
export {Thanks}