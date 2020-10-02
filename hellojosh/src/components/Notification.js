/** @jsx jsx */

import { css, jsx, keyframes } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import { useEffect } from "react";

const Notification = ({ unread }) => {
    const shakeOnChange = (e) => {
        e.target.style.backgroundColor = "orange";
        e.target.classlist.add("bellshake");
    };

    const shake = keyframes`
    10%, 90% {
        transform: translate(-1px);
    }

    20%, 80%{
        transform: translate(2px);
    }

    30%, 50%, 70%{
        transform: translate(-4px);
    }

    40%, 60%{
        transform: translate(4px);
    }
    `;

    const styleLink = css`
        color: black;
        text-decoration: none;
        position: relative;
    `;

    const styleIcon = css`
        font-size: 1.5em;
    `;
    const styleBadge = css`
        background-color: red;
        color: white;
        font-size: 0.625em;
        padding: 0.05em 0.35em;
        border-radius: 1em;
        border: 0.0625em solid white;
        display: inline-block;
        position: absolute;
        top: -0.5em;
        right: -1em;

        .bellshake {
            animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate(0);
        }
    `;

 

    return (
        <Link css={styleLink} to="/">
            <FontAwesomeIcon css={styleIcon} icon={["far", "bell"]} size="2x" />
            <span onClick={shakeOnChange} css={styleBadge}>
                {unread}
            </span>
        </Link>
    );
};

export default Notification;
