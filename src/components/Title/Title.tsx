import React, { useRef } from "react";
import "./Title.css";
import useObserver from "../../hooks/useObserver/useObserver";

interface ITitleProps {
    text: string;
}

const Title = ({ text }: ITitleProps) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const isVisible = useObserver(ref);

    return (
        <h1 className={ isVisible ? "title title-animation" : "title" } ref={ ref }>
            { text }
        </h1>
    );
};

export default React.memo(Title);