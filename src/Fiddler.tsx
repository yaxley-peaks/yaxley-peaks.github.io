import React from "react";
import "./Fiddler.css";
import { useState } from "react";

export default function Fiddler() {
    const [style, setStyle] = useState({
        top: "50%",
        left: "50%"
    });

    const mouseOverHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        setStyle({
            ...{
                top: Math.random() * 90 + "%",
                left: Math.random() * 90 + "%"
            }
        });
        console.log(style);
    };
    return (
        <button id="fiddler" style={style} onMouseOver={mouseOverHandler}>
            Begin!
        </button>
    );
}