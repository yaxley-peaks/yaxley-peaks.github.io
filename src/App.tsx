import React, {useState} from "react";
import Greeting from "./Greeting";
import MobileMessage from "./MobileMessage";
import Fiddler from "./Fiddler";

export default function App() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

    const count = useState(1);

    return <>
        <Greeting isMobile={isMobileDevice} count={count}/>
        <MobileMessage isMobile={isMobileDevice}/>
        <Fiddler isMobile={isMobileDevice} count={count}/>
    </>;
}