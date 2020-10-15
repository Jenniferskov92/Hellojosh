/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";

const Completion = ({ percentage }) => {
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        if (percentage < 100) setProgress("threequarter");
        if (percentage < 75) setProgress("half");
        if (percentage < 50) setProgress("onequarter");
        if (percentage < 1) setProgress("notstarted");
    }, [percentage]);

    const style = css`
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-45deg);

        &.threequarter {
            border-top-color: transparent;
        }
        &.half {
            border-top-color: transparent;
            border-left-color: transparent;
        }
        &.onequarter {
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
        }
        &.notstarted {
            border-color: transparent;
        }
    `;

    const stylePercentage = css`
        font-size: 0.8125rem;
        transform: rotate(45deg);
    `;

    return (
        <div css={style} className={progress && progress}>
            <p css={stylePercentage}>{percentage}%</p>
        </div>
    );
};

export default Completion;
