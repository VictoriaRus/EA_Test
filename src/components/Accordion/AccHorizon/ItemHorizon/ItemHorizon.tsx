import React from "react";
import "./ItemHorizon.css";

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

const ItemHorizon = ({ event, onToggle, active }: IItemProps) => {
    const { id, title, date, photo } = event;

    return (
        <li className={ `link ${ active ? "hovered" : "" }` }>
            <button className="prev" onClick={ onToggle }>
                <div className={ active ? "prev-img-active" : "prev-img" }>
                    <img src={ photo } alt="img"/>
                </div>
                <div className="prev-content">
                    <span className="prev-title">{ title }</span>
                    <span className="prev-id">{ id }</span>
                </div>
            </button>
            <div className="full_content">
                <div className="content">
                    <h3 className="content-title">{ title }</h3>
                    <div className="content-date">{ date }</div>
                    <button className="content-but">More information</button>
                </div>
                <div className="full_content__img">
                    <img src={ photo } alt="img"/>
                </div>
            </div>
        </li>
    );
};

export default ItemHorizon;