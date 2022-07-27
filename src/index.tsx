import React from "react";
import { createRoot } from "react-dom/client";
import Fiddler from "./Fiddler";
import Greeting from "./Greeting";



let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

createRoot(document.getElementById('root') as Element).render(
    <>
        <Greeting isMobile={isMobileDevice} />
        <Fiddler isMobile={isMobileDevice} />
    </>
)