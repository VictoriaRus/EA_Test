import React from "react";
import "./Title.css";

interface ITitleProps {
    text: string;
}

const Title = ({ text }:ITitleProps ) => {
    return (
        <h1 className="title">{ text }</h1>
    );
};

export default React.memo(Title);