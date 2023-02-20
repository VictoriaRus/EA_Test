import React, { useCallback } from "react";
import "./MainPage.css";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import CountDown from "../../components/main-page-components/CountDown/CountDown";
import Portal from "../../components/Portal/Portal";

const MainPage = () => {
    const openResource = useCallback(() => {
        window.open("https://egorovagency.by/");
    }, [])

    return (
        <>
        <div className="main-page">
            <div className="main">
                <div className="container">
                    <Logo/>
                    <Title/>
                    <div className="text">We're making lots of improvements and will be back soon</div>
                    <CountDown/>
                    <div className="text text-but">Check our event page when you wait:</div>
                    <Button text="Go to the event" onClick={ openResource }/>
                </div>
            </div>
            <Footer/>
        </div>
            <Portal>Hello</Portal>
        </>
    );
};

export default MainPage;