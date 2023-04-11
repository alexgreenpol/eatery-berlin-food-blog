import { FC } from "react";
import "./HeadingBox.scss";

type HeadingBoxProps = {
    title: string;
    description?: string;
    children?: JSX.Element | JSX.Element[];
};

const HeadingBox: FC<HeadingBoxProps> = ({ title, description, children }) => {
    return (
        <div className="heading-box">
            <h2 className="heading-box__title">{title}</h2>
            {description && (
                <p className="heading-box__description">{description}</p>
            )}
            {children}
        </div>
    );
};

export default HeadingBox;
