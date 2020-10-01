import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faClock} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Button from "./components/Button";
import CourseCounter from "./components/CourseCounter";
import Detail from "./components/Detail";
import CourseTitle from "./components/CourseTitle";

library.add(faFire, faClock, faReact);

function App() {
    return (
        <Fragment>
            <h1>Hej</h1>
            <CourseCounter nmb="11" txt="courses completed" />
            <CourseCounter nmb="4" txt="courses in progress" />

            <Button txt="View course" />

            <Detail icon="clock" detail="6h 30m" />
            <Detail icon="fire" detail="4,9" />

            <CourseTitle
                logo="react"
                title="Mastering React"
                teacher="Carsten Lund"
            />
        </Fragment>
    );
}

export default App;
