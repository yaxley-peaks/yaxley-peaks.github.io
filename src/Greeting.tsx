import React from "react"
import "./Greeting.css"
import { Props } from "./PropInterfaces"
import data from "./data.json"

let msg = data.greeting["1"];
export default function Greeting(props: Props) {
    const [count] = props.count!;
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
        if (count >= 15)
            return (
                <div>
                    <h1>
                        ████
                    </h1>
                    <h2>{msg}</h2>
                </div>
            );
        else
            return (
                <div>
                    <h1>
                        <span id={count >= 4 ? "crossed" : ""}
                        >Hello!</span>
                    </h1>
                    <h2>{msg}</h2>
                </div>
            );
    }

}