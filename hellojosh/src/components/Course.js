/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import Button from "./Button";
import CourseTitle from "./CourseTitle";
import Detail from "./Detail";

const Course = ({ logo, title, teacher, duration, rating }) => {
    return (
        <div>
            <CourseTitle logo={logo} title={title} teacher={teacher} />
            <Detail icon="clock" detail={duration} />
            <Detail icon="fire" detail={rating} />
            <Button txt="View course" />
        </div>
    );
};

export default Course;
