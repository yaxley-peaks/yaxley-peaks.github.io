import React from "react";
import { MobileProps } from "./PropInterfaces";

export default function MobileMessage(props: MobileProps) {
    if (props.isMobile) {
        return (
        <>
            <p id="mob">You seem to be on a Mobile device.
                This is not supported.
                Please switch to a non Mobile device.</p>
        </>
        );
    } else {
        return <></>
    }
}