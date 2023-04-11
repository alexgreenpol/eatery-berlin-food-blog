import { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import "./Header.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={cn("site-header", { toggle })}>
            <div className="container">
                <div className="site-header__content">
                    <div className="site-header__logo">Eatery Berlin</div>
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/services">Services</NavLink>
                            <ul className="menu__submenu">
                                <li className="menu__item">
                                    <NavLink to="/services/food-photographer-and-product-photographer">
                                        Food photography
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/services/video-production">
                                        Video production
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/services/recipe-creation">
                                        Recipe Creation
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/services/food-stylist">
                                        Food stylist
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/services/collaboration">
                                        Collaboration
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/services/cooking-classes">
                                        Cooking Classes
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/stories">Stories</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div
                        className="toggle-menu"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
