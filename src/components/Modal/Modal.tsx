import React from "react";
import Portal from "../Portal/Portal";
import "./Modal.css";
import Close from "../../assets/icons/close.svg"

interface IModalProps {
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
    onSubmit: () => void;
    onClose: () => void;
}

const Modal = ({ children, title, isOpen, onSubmit, onClose }: IModalProps) => {
    return (
        <>
            {
                isOpen && (
                    <Portal>
                        <div className="modal-overlay">
                            <div className="modal-window">
                                <div className="modal-close" onClick={ onClose }>
                                    <img src={ Close } alt="close-icon"/>
                                </div>
                                <div className="modal-header">
                                    { title }
                                </div>
                                <div className="modal-body">
                                    { children }
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-button" onClick={ onSubmit }>Close</button>
                                </div>
                            </div>
                        </div>
                    </Portal>
                )
            }
        </>
    );
};

export default Modal;