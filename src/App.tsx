import React, { useState } from "react";
import Greeting from "./Greeting";
import Fiddler from "./Fiddler";
import Footer from "./Footer";

export default function App() {

    function isTouchEnabled(): boolean {
        return (('ontouchstart' in window)
             || (navigator.maxTouchPoints > 0));
    }
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details) || isTouchEnabled();


    const count = useState(1);

    return <>
        <Greeting isMobile={isMobileDevice} count={count} />
        <Fiddler isMobile={isMobileDevice} count={count} />
        <Footer />
    </>;
}
