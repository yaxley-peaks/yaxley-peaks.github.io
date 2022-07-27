import React from "react";
import "./Fiddler.css";
import { useState } from "react";
import { MobileProps } from "./PropInterfaces";

export default function Fiddler(props: MobileProps) {
    const [style, setStyle] = useState({
        top: "50%",
        left: "50%"
    });

    const mouseOverHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (props.isMobile) {
            setStyle({
                ...{
                    top: Math.random() * 90 + "%",
                    left: Math.random() * 90 + "%"
                }
            });
        }
    };

    if (props.isMobile) {
        return (
            <button disabled={true} className="fiddler" id="disabled" style={style} onMouseOver={mouseOverHandler}>
                Begin!
            </button>
        );
    } else {
        return (<button className="fiddler" id="enabled" style={style} onMouseOver={mouseOverHandler}>
            Begin!
        </button>
        );
    }
}