import React from "react";
import "./Fiddler.css";
import { useState } from "react";
import { MobileProps } from "./PropInterfaces";

export default function Fiddler(props: MobileProps) {
    const [style, setStyle] = useState({
        position: "absolute",
        top: "50%",
        left: "50%"
    });
    const mouseOverHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        setStyle({
            ...{
                position: "absolute",
                top: Math.random() * 90 + 5 + "%",
                left: Math.random() * 90 + 5 + "%"
            }
        });

    };

    if (props.isMobile) {
        return (
            <button disabled={true} className="fiddler" id="disabled" style={style as React.CSSProperties}>
                ❌️
            </button>
        );
    } else {
        return (<button className="fiddler" id="enabled" style={style as React.CSSProperties} onMouseOver={mouseOverHandler}>
            Begin!
        </button>
        );
    }
}