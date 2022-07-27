import React from "react";
import { createRoot } from "react-dom/client";
import Fiddler from "./Fiddler";
import Greeting from "./Greeting";



createRoot(document.getElementById('root') as Element).render(
    <>
    <Greeting />
    <Fiddler />
    </>
)