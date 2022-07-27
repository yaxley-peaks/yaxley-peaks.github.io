import React from "react"
import "./Greeting.css"
import { Props } from "./PropInterfaces"
import data from "./data.json"

export default function Greeting(props: Props) {
    if (props.isMobile) {
        return (
            <div>
                <h1>Welcome to my page.</h1>
                <h2 id="mobile">Click Below to Begin!</h2>
                <h2 id="leave">GO AWAY!</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Welcome to my page.</h1>
                <h2>Click Below to Begin!</h2>
            </div>
        );
    }

}