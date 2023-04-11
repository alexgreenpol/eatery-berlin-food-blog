import { FC } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.scss";

type ButtonLinkProps = {
    children: string;
    buttonUrl: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, buttonUrl }) => {
    return (
        <Link className="btn btn--rounded" to={buttonUrl}>
            {children}
        </Link>
    );
};

export default ButtonLink;
