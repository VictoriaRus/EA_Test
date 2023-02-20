import React from "react";
import "./ItemTablet.css";
import Icon from "../../../assets/icons/vector-tablet.svg";

interface IItemProps {
    count: number;
    text: string;
}


const ItemTablet = ({ count, text }: IItemProps) => {
    return (
        <div>
            <div className="num">{ count }</div>
            <div className="el">
                <img src={ Icon } alt="icon"/>
                <div className="el-wrap">
                    <div className="el-text">{ text }</div>
                </div>
            </div>
        </div>
    );
};

export default ItemTablet;