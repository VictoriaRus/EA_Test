import React from "react";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import AccVertical from "./AccVertical/AccVertical";
import AccHorizon from "./AccHorizon/AccHorizon";

const Accordion = () => {
    const size = useWindowSize();

    return (
        <>
            {
                size.width > 768 ? <AccHorizon /> : <AccVertical />
            }
        </>
    );
};

export default Accordion;