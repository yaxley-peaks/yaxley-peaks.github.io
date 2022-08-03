import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Props } from "./PropInterfaces";
import './Footer.css'

export default function Footer(props: Props) {
    return (
        <div id="container">
            {/* <p id="license">💀️</p> */}
            <p id="love">Made with <FontAwesomeIcon icon={faHeart} /> by
                <a href="https://github.com/yaxley-peaks"> Yax </a>
                on <a href="https://github.com/yaxley-peaks/yaxley-peaks.github.io/"><FontAwesomeIcon icon={faGithub} /></a>
            </p>
            
        </div>
    );
}