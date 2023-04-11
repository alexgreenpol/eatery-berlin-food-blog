import { FC, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./ExpandedItem.scss";

type ExpandedItemProps = {
    title: string;
    info: string;
};

const ExpandedItem: FC<ExpandedItemProps> = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="expanded-item">
            <div className="expanded-item__content">
                <h5
                    onClick={() => setExpanded(!expanded)}
                    className="expanded-item__title"
                >
                    {title}
                </h5>
                <button
                    className="expanded-item__btn"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {expanded && <p className="expanded-item__text">{info}</p>}
        </div>
    );
};

export default ExpandedItem;
