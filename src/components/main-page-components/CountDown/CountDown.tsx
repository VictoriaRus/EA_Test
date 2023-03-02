import React, { useEffect, useState } from "react";
import "./CountDown.css"
import ItemDesktop from "../ItemDesktop/ItemDesktop";
import ItemTablet from "../ItemTablet/ItemTablet";
import useWindowSize from "../../../hooks/useWindowSize/useWindowSize";

const CountDown = () => {
    const size = useWindowSize();

    const calculateTimeLeft = () => {
        let deadline = new Date("June 31, 2023 00:00:00").getTime();
        let now = new Date().getTime();
        let difference = deadline - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            {
                size.width > 768 ?
                    <div className="count-down">
                        <ItemDesktop count={ timeLeft.days } text="Days"/>
                        <span className="colon">:</span>
                        <ItemDesktop count={ timeLeft.hours } text="Hours"/>
                        <span className="colon">:</span>
                        <ItemDesktop count={ timeLeft.minutes } text="Minutes"/>
                        <span className="colon">:</span>
                        <ItemDesktop count={ timeLeft.seconds } text="Seconds"/>
                    </div>
                    :
                    <div className="count-down">
                        <ItemTablet count={ timeLeft.days } text="DD"/>
                        <span className="colon-tablet">:</span>
                        <ItemTablet count={ timeLeft.hours } text="HH"/>
                        <span className="colon-tablet">:</span>
                        <ItemTablet count={ timeLeft.minutes } text="MM"/>
                        <span className="colon-tablet">:</span>
                        <ItemTablet count={ timeLeft.seconds } text="SS"/>
                    </div>
            }
        </>
    );
};

export default React.memo(CountDown);