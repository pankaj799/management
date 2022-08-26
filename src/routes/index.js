import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../screens/"
import {Auth} from "../screens/auth/"

const token = localStorage.getItem("myEdPrePToken")

const AppRouter = () => {
    return (
        // token?
        <Main />
        // :
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Auth />}></Route>
        //     </Routes>
        // </Router>
        
    )
}

export default AppRouter