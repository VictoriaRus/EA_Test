import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
    children: React.ReactNode;
}

const Portal = ({ children }: IPortalProps) => {
    const el: HTMLDivElement = document.createElement("div");

    useEffect(() => {
        document.body.appendChild(el);

        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

export default Portal;