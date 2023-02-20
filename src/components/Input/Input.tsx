import React, { HTMLAttributes } from "react";
import "./Input.css";

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    value: string;
    fieldName?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, fieldName, onChange, ...rest }: IInputProps) => {
    return (
        <div className="input-elem">
            <input className="input" value={ value } onChange={ onChange } name={ fieldName } { ...rest }/>
        </div>
    );
};

export default React.memo(Input);