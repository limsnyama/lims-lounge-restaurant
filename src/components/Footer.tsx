import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AddressAndHours from "./AddressAndHours";
import {
    addressAndHours,
    footerContainer,
    socialMediaIcon,
    socialMediaButtonsContainer,
} from "./Footer.module.scss";

function SocialMediaIcons() {
    return (
        <ul>
            <li>
                <a href="https://www.instagram.com/limsnyamachoma/" target="_blank">
                    <StaticImage
                        src="../images/logos/instagram-logo.svg"
                        alt="Twitter"
                        className={socialMediaIcon}
                        placeholder="blurred"
                        layout="fullWidth" />
                </a>
            </li>
        </ul>
    );
}

function Footer(): React.ReactElement {
    return (
        <div className={footerContainer}>
            <div>
                <AddressAndHours className={addressAndHours}>
                    <div className={socialMediaButtonsContainer}>
                        <label>Follow us</label>
                        <SocialMediaIcons />
                    </div>
                </AddressAndHours>
            </div>
            <div style={{margin: "auto"}}>
                © {(new Date()).getFullYear()} Stanley & Mugo
            </div>
        </div>
    );
}

export default Footer;