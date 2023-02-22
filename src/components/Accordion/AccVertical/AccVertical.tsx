import React, { useState } from "react";
import "./AccVertical.css"
import { EVENTS } from "../../../mock-data/constants";
import ItemVertical from "./ItemVertical/ItemVertical";

const AccVertical = () => {
    const [clicked, setClicked] = useState(0);

    const handleToggle = (index: number) => {
        if (clicked === index) {
            return setClicked(0);
        }
        setClicked(index);
    };

    return (
        <ul className="accordion">
            { EVENTS.map((event, index) => (
                <ItemVertical key={ index }
                              event={ event }
                              onToggle={ () => handleToggle(index) }
                              active={ clicked === index }
                />
            )) }
        </ul>
    );
};

export default AccVertical;