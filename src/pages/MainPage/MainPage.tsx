import React, { useCallback, useState } from "react";
import "./MainPage.css";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import CountDown from "../../components/main-page-components/CountDown/CountDown";
import Accordion from "../../components/Accordion/Accordion";

const MainPage = () => {
    const [isEvents, setIsEvents] = useState(true);

    const onOpenSection = useCallback(() => {
        setIsEvents(true);
    }, []);

    const openResource = useCallback(() => {
        window.open("https://egorovagency.by/");
    }, [])

    return (
        <>
            <div className="main-page">
                <div className="main">
                    <div className="container">
                        <Logo/>
                        <div className="main-title">
                            <Title text="Under Construction"/>
                            <div className="text">We're making lots of improvements and will be back soon</div>
                        </div>
                        <div className="main-body">
                            <CountDown/>
                        </div>
                        <div className="main-footer">
                            <div className="text text-but">Check our event page when you wait:</div>
                            <Button text="Go to the event" onClick={ openResource }/>
                        </div>
                    </div>
                </div>
                <Footer onOpen={ onOpenSection }/>
            </div>
            {
                isEvents &&(
                    <div className="events-container" >
                        <div className="section">
                            <Title text="All events"/>
                            <Accordion />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default MainPage;