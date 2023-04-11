import { FC } from "react";
import "./Blockquote.scss";

type BlockquoteProps = {
    children: JSX.Element | JSX.Element[];
};

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
    return <div className="blockquote">{children}</div>;
};

export default Blockquote;
