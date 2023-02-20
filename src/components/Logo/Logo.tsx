import React from "react";
import "./Logo.css"
import Icon from "../../assets/icons/logo-icon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo" src={ Icon } alt="logo"/>
        </Link>
    );
};

export default React.memo(Logo);