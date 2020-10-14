import React from "react";
import { Router } from "@reach/router";
import User from "./components/User";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Testview from "./views/Testview";
import "./App.css";

library.add(faFire, faClock, faReact, faBell);

function App() {
    return (
        <Router>
            <User path="/:firstname/*"/>
            <Testview path="testview" />
        </Router>
    );
}

export default App;
