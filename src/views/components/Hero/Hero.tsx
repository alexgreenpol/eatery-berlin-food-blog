import { FC } from "react";
import "./Hero.scss";

type HeroProps = {
    label?: string;
    title: string;
    subline?: string;
    image: string;
};

const Hero: FC<HeroProps> = ({ label, title, subline, image }) => {
    return (
        <div className="hero">
            {label && <p className="uppercase uppercase--mini">{label}</p>}
            <h1 className="hero__title">{title}</h1>
            {subline && <p className="hero__subline">{subline}</p>}
            <div className="hero__image">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Hero;
