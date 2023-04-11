import { FC } from "react";
import "./Button.scss";

type ButtonProps = {
    children: string;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="btn btn--rounded" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
