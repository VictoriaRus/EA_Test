import React from "react";
import ReactDOM from "react-dom";

interface IPortalProps{
    children: React.ReactNode;
}
interface IPortalState{}

class Portal extends React.Component<IPortalProps, IPortalState>{


    private el: HTMLDivElement = document.createElement("div");
    constructor(props: IPortalProps) {
        super(props);
    }

    componentDidMount() {
        //после первого рендера
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        //перед удолением компанента
        document.removeChild(this.el);
    }

    render(){
        const { children }= this.props;
        // @ts-ignore
        return ReactDOM.createPortal(children, this.el);
    }
}

export default Portal;