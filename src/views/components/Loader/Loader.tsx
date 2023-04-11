import { FC } from "react";
import "./Loader.scss";

type LoaderProps = {
    isLoading: boolean;
};

const Loader: FC<LoaderProps> = ({ isLoading }) => {
    return <>{isLoading && <div className="loader">Loading data ...</div>}</>;
};

export default Loader;
