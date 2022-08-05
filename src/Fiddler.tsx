import React from "react";
import "./Fiddler.css";
import {useState} from "react";
import {Props} from "./PropInterfaces";
import  data from "./data.json";



let msg = "Begin!"
export default function Fiddler(props: Props) {

    const [style, setStyle] = useState({
        position: "absolute",
        top: "50%",
        left: "50%"
    });
    const [count, setCount] = props.count!; //<-- ! is the not null assertion.
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
        setCount(count + 1);
        console.log(count)
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = './hehe.html'
    }

    if (props.isMobile) {
        return (
            <button disabled={true} className="fiddler" id="disabled" style={style as React.CSSProperties}>
                ❌️
            </button>
        );
    } else {
        // let _count: string = count + "";
        // @ts-ignore
        msg = data.button[`${count}`] ?? msg;

        return <button className="fiddler" id="enabled" style={style as React.CSSProperties}
                       onMouseOver={mouseOverHandler} onClick={clickHandler}>{msg}</button>;

    }
}