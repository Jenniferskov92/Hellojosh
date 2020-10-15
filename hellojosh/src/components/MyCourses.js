/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Completion from "./Completion";
import Course from "./Course";

const MyCourses = () => {
    const [current, setCurrent] = useState(0);
    let array = ["first", "second", "third", "fourth"];
    const [watching, setWatching] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/data/watching.json")
            .then((response) => response.json())
            .then((result) => console.log(result));
    }, []);

    const forwardClick = () => {
        current === array.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    };
    const backClick = () => {
        current === 0 ? setCurrent(array.length - 1) : setCurrent(current - 1);
    };

    const styleButton = css`
        border: none;
        background-color: white;
    `;

    return (
        <div>
            <h1>{array[current]}</h1>
            <Completion percentage="100" />

            <Course
                logo="react"
                title="3D Animation"
                teacher="Henrik Glinka"
                completion="12"
            />
            <button css={styleButton} onClick={backClick}>
                <FontAwesomeIcon
                    icon={["far", "arrow-alt-circle-left"]}
                    size="3x"
                />
            </button>

            <button css={styleButton} onClick={forwardClick}>
                <FontAwesomeIcon
                    icon={["far", "arrow-alt-circle-right"]}
                    size="3x"
                />
            </button>
        </div>
    );
};

export default MyCourses;
