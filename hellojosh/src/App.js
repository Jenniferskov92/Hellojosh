import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import CourseCounter from "./components/CourseCounter";
import Course from "./components/Course";
import Notification from "./components/Notification"; 

library.add(faFire, faClock, faReact, faBell);

function App() {
    return (
        <Fragment>
            <h1>Hej</h1>
            <CourseCounter nmb="11" txt="courses completed" />
            <CourseCounter nmb="4" txt="courses in progress" />
            <br/>
            <br/>
            <br/>
            <Notification unread="20" />
            <br/>
            <br/>
            <br/>

            <Course
                logo="react"
                title="Mastering React"
                teacher="Carsten Lund"
                duration="17h 59m"
                rating="5.0"
            />
        </Fragment>
    );
}

export default App;
