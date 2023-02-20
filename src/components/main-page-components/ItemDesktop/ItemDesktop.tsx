import React from "react";
import "./ItemDesktop.css";
import Icon from "../../../assets/icons/vector.svg";

interface IItemProps {
    count: number;
    text: string;
}

const ItemDesktop = ({ count, text }: IItemProps) => {
    return (
        <div>
            <div className="number">{ count }</div>
            <div className="elem">
                <img src={ Icon } alt="icon"/>
                <div className="elem-wrap">
                    <div className="elem-text">{ text }</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ItemDesktop);