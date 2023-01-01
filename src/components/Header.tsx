import * as React from "react";
import { Link, withPrefix } from "gatsby";
import classNames from "classnames";
import {
    headerContainer,
    navLinksParent,
    currentPage,
    logo,
} from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const HEADER_LOGO_HEIGHT_IN_PIXELS = 64;
const pages: {
    internalUrlPath?: string,
    externalUrlPath?: string,
    displayText: string,
  }[] = [
    {
      internalUrlPath: withPrefix('/'),
      displayText: 'HOME'
    },
    {
      internalUrlPath: withPrefix('/menu/'),
      displayText: 'MENU'
    },
    {
      internalUrlPath: withPrefix('/about/'),
      displayText: 'ABOUT'
    }
];
  
function PageNavLinks(): React.ReactElement {
    const links = pages.map(({ internalUrlPath, externalUrlPath, displayText }) => {
        const isCurrentPage = internalUrlPath &&
            typeof window !== 'undefined' &&
            location.pathname === withPrefix(internalUrlPath);

        const linkClasses = classNames({
            [currentPage]: isCurrentPage,
        });

        return (
            <li key={`${internalUrlPath}|${externalUrlPath}`}>
                {internalUrlPath &&
                    <Link to={internalUrlPath} className={linkClasses}>
                        {displayText}
                    </Link>}
                {externalUrlPath &&
                    <a href={externalUrlPath} className={linkClasses}>
                        {displayText}
                    </a>}
            </li>
        );
    });

    return (
        <nav className={navLinksParent}>
            <ul>
                {links}
            </ul>
        </nav>
    );
}

export interface HeaderProps {
    addHeaderPadding: boolean | undefined,
}

function Header(props: HeaderProps): React.ReactElement {
    const content = (<>
        <Link to={withPrefix('/')} className={logo}>
            <StaticImage
                src="../images/ig/logo-v2.jpg"
                alt="LIM'S CHOMA ZONE LOGO"
                placeholder="blurred"
                layout="constrained"
                objectFit="contain"
                height={HEADER_LOGO_HEIGHT_IN_PIXELS} />
        </Link>
        <PageNavLinks />
    </>);

    return (
        <header className={headerContainer}>
            {props.addHeaderPadding && (
                <div style={{visibility: 'hidden'}}>
                    {content}
                </div>)}
            <div style={{position: 'fixed'}}>
                {content}
            </div>
        </header>
    );
}

export default Header;