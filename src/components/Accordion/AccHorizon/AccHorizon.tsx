import React, { useState } from "react";
import "./AccHorizon.css"
import { EVENTS } from "../../../mock-data/constants";
import ItemHorizon from "./ItemHorizon/ItemHorizon";

const AccHorizon = () => {
    const [clicked, setClicked] = useState(0);

    const handleToggle = (index: number) => {
        if (clicked === index) {
            return setClicked(0);
        }
        setClicked(index);
    };

    return (
        <ul className="acc">
            { EVENTS.map((event, index) => (
                <ItemHorizon key={ index }
                             event={ event }
                             onToggle={ () => handleToggle(index) }
                             active={ clicked === index }/>
            )) }
        </ul>
    );
};

export default AccHorizon;