import React, { useCallback, useRef } from "react";
import "./MainPage.css";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import CountDown from "../../components/main-page-components/CountDown/CountDown";
import Accordion from "../../components/Accordion/Accordion";
import useObserver from "../../hooks/useObserver/useObserver";

const MainPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useObserver(ref);

    const openResource = useCallback(() => {
        window.open("https://egorovagency.by/");
    }, [])

    return (
        <>
            <div className={ isVisible ? "main-page" : "" }>
                <div className="main" ref={ ref }>
                    <div className="container">
                        <Logo />
                        <div className={ isVisible ? "main-header" : "" }>
                            <h1 className="main-title">Under Construction</h1>
                            <div className="text">
                                We're making lots of improvements and will be back soon
                            </div>
                        </div>
                        <div className={ isVisible ? "main-body" : "" }>
                            <CountDown />
                        </div>
                        <div className={ isVisible ? "main-footer" : "" }>
                            <div className="text text-but">Check our event page when you wait:</div>
                            <Button text="Go to the event" onClick={ openResource } />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            <div className="events-container">
                <div className="section" id="section-1">
                    <div className="events-title">
                        <Title text="All events" />
                    </div>
                    <Accordion />
                </div>
            </div>
        </>
    );
};

export default MainPage;