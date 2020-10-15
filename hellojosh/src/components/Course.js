/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import Button from "./Button";
import CourseTitle from "./CourseTitle";
import Detail from "./Detail";
import Completion from "./Completion";

const Course = ({ logo, title, teacher, duration, rating, completion }) => {
    const style = css`
        height: 5em;
        background-color: #f5f5f7;
        border-radius: 0.875em;
        display: flex;
        justify-content: space-between;
        padding-left: 0.5em;
        padding-right: 1.5em;
        align-items: center;
    `;
    return (
        <div css={style}>
            <CourseTitle logo={logo} title={title} teacher={teacher} />
            {duration && <Detail icon="clock" detail={duration} />}
            {rating && <Detail icon="fire" detail={rating} />}
            {completion && <Completion percentage={completion} />}
            <Button txt={completion ? "Continue" : "View course"} />
        </div>
    );
};

export default Course;
