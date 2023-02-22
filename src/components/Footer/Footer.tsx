import React, { useCallback, useState } from "react";
import "./Footer.css";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import { REGULAR } from "../../mock-data/constants";

interface IFooterProps {
    onOpen: () => void;
}

const Footer = ({ onOpen }: IFooterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const [emailError, setEmailError] = useState("Email can`t be empty");
    const [isError, setIsError]= useState(false);

    const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (e.target.name === "email") {
            if (!REGULAR.test(String(e.target.value).toLowerCase())) {
                setEmailError("Incorrect email");
                setIsError(true);
                if (!e.target.value) {
                    setEmailError("Email can`t be empty");
                    setIsError(true);
                }
            } else {
                setEmailError("");
                setIsError(false);
            }
        }
    }, []);

    const onSubscribe = useCallback(() => {
        const data = JSON.stringify({
            "email": text
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                console.log(data);
                setIsOpen(prevState => !prevState);
                setIsError(false);
                setEmailError("Email can`t be empty");
                setText("");
            }
        });

        xhr.open("POST", "https://run.mocky.io/v3/c3abfb08-30c2-4771-aa22-738f92da834a");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send(data);
    }, [text]);

    return (
        <div className="footer">
            <div className="container">
                <Input onChange={ onTextChange }
                       value={ text }
                       fieldName="email"
                       placeholder="Enter your Email and get notified"
                       onKeyDown={ (event: React.KeyboardEvent<HTMLInputElement>) => {
                           if (event.key === "Enter" && !emailError) {
                               onSubscribe();
                           }
                       }}
                />
                {
                    isError && (<p className="error">{ emailError }</p>)
                }
                <div className="footer__link">
                    <p  className="link-button" onClick={ onOpen }>Other Events</p>
                </div>
            </div>
            <Modal title="SUCCESS!"
                   isOpen={ isOpen }
                   onSubmit={ () => setIsOpen(false) }
                   onClose={ () => setIsOpen(false) }
            >
                <p>You have successfully subscribed to the email newsletter</p>
            </Modal>
        </div>
    );
};

export default React.memo(Footer);