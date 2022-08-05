import React, { useState } from "react";
import Greeting from "./Greeting";
import Fiddler from "./Fiddler";
import Footer from "./Footer";

export default function App() {

    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

    const count = useState(1);

    return <>
        <Greeting isMobile={isMobileDevice} count={count} />
        <Fiddler isMobile={isMobileDevice} count={count} />
        <Footer />
    </>;
}