import React, { useRef } from "react";
import "./Logo.css"
import Icon from "../../assets/icons/logo-icon.svg";
import useObserver from "../../hooks/useObserver/useObserver";
import { useNavigate } from "react-router";

const Logo = () => {
    const navigate = useNavigate();

    const ref = useRef<HTMLImageElement>(null);
    const isVisible = useObserver(ref);

    const redirect = () => {
        navigate(`/main`);
    };

    return (
        <img className={ isVisible ? "logo-an" : "logo" }
             onClick={ redirect }
             src={ Icon } alt="logo" ref={ ref }/>
    );
};

export default React.memo(Logo);