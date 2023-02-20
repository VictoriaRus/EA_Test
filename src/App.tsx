import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/main"/>}/>
            <Route path="/main" element={<MainPage/>}/>
        </Routes>
    );
}

export default App;
