import React from "react";
import "./Fiddler.css";
import { useState } from "react";
import { Props } from "./PropInterfaces";
import data from "./data.json";

let msg = "Begin!";
export default function Fiddler(props: Props) {
  const [style, setStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "50%",
  });
  const [count, setCount] = props.count!; //<-- ! is the not null assertion.
  const mouseOverHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setStyle({
      ...{
        position: "absolute",
        top: Math.random() * 90 + 5 + "%",
        left: Math.random() * 90 + 5 + "%",
      },
    });
    setCount(count + 1);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "https://blog.yaxley.in";
  };

  if (props.isMobile) {
    return (
      <button
        tabIndex={-1}
        disabled={true}
        className="fiddler"
        id="disabled"
        style={style as React.CSSProperties}
      >
        ❌️
      </button>
    );
  } else {
    // @ts-ignore
    msg = data.button[`${count}`] ?? msg;

    return (
      <button
        tabIndex={-1}
        className="fiddler"
        id="enabled"
        style={style as React.CSSProperties}
        onMouseOver={mouseOverHandler}
        onClick={clickHandler}
      >
        <a href="./posts" tabIndex={-1}>
          {msg}
        </a>
      </button>
    );
  }
}
