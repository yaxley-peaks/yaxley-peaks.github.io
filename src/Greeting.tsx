import React from "react"
import "./Greeting.css"
import { MobileProps } from "./PropInterfaces"

export default function Greeting(props: MobileProps) {

    if (props.isMobile) {
        return (
            <div>
                <h1>Welcome to my page.</h1>
                <h2 id="mobile">Click Below to Begin!</h2>
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