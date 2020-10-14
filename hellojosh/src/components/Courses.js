/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Router, Link } from "@reach/router";
import CourseLink from "./CourseLink";
import CourseList from "./CourseList";

const Courses = () => {
    const styleHeadLine = css`
        margin: 0;
    `;
    return (
        <div>
            <h2 css={styleHeadLine}>Courses</h2>

            <nav>
                <CourseLink to="./">All Courses </CourseLink>
                <CourseLink to="newest">Newest</CourseLink>{" "}
                <CourseLink to="top">Top rated</CourseLink>
                <CourseLink to="popular">Most popular</CourseLink>
            </nav>

            <Router>
                <CourseList path="/" type="all"></CourseList>
                <CourseList path="newest" type="newest"></CourseList>
                <CourseList path="top" type="top"></CourseList>
                <CourseList path="popular" type="popular"></CourseList>
            </Router>
        </div>
    );
};

export default Courses;
