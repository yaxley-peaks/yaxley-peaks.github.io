import React from "react";
import "./Greeting.css";
import { Props } from "./PropInterfaces";
import data from "./data.json";

let msg = data.greeting["1"];
export default function Greeting(props: Props) {
  const [count] = props.count!;
  const __reload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.reload();
    return false; //gotta do this if reloading from a button click
  };

  if (props.isMobile) {
    return (
      <div>
        <h1 id="mobile">Hello!</h1>
        <h2>You are on a mobile device. This is not supported.</h2>
        <h2 id="leave">GO AWAY!</h2>
      </div>
    );
  } else {
    // @ts-ignore
    msg = data.greeting[`${count}`] ?? msg;
    if (count >= 110 && count < 150) {
      return (
        <div>
          <h1>
            <span id={count >= 4 ? "crossed" : ""}>Hello!</span>
          </h1>
          <h2>
            {msg} <br />
            <button id="give_up" onClick={__reload}>
              Click here to give up
            </button>
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            <span id={count >= 4 ? "crossed" : ""}>Hello!</span>
          </h1>
          <h2>{msg}</h2>
        </div>
      );
    }
  }
}
