import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/main"/>}/>
            <Route path="/main" element={<MainPage/>}/>
        </Routes>
    );
}

export default App;
