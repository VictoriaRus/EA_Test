import React from "react";
import "./ItemVertical.css";

interface IEvent {
    id: string,
    title: string,
    date: string,
    photo: string,
}

interface IItemProps {
    event: IEvent,
    active: boolean,
    onToggle: () => void,
}

const ItemVertical = ({event, onToggle, active}: IItemProps) => {
    const {id, title, date, photo} = event;

    return (
        <li className={active ? "active" : ""}>
            <div className={`wrapper ${active ? "open" : ""}`}>
                <div className="item-img">
                    <img src={photo} alt="img"/>
                </div>
                <div className="accordion-body">
                    <h3 className="content-title">{title}</h3>
                    <div className="content-date">{date}</div>
                    <button className="content-but">More information</button>
                </div>
            </div>
            <button className="accordion-button" onClick={onToggle}>
                <div className="button-content">
                    <span className="accordion-id">{id}</span>
                    <span className="accordion-title">{title}</span>
                </div>
                <div className={active ? "button-img-active" : "button-img"}>
                    <img src={photo} alt="img"/>
                </div>
            </button>
        </li>
    );
};

export default ItemVertical;