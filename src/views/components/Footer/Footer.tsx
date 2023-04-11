import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-lg-1-4">
                        <div className="site-footer__widget">
                            <h5 className="site-footer__widget-title">
                                Eatery Berlin
                            </h5>
                            <p>Ben Donath</p>
                            <p>
                                T:{" "}
                                <a href="tel:4917663054781">
                                    +49 176 63 05 47 81
                                </a>
                            </p>
                            <p>
                                E:{" "}
                                <a href="mailto:post@eateryberlin.com">
                                    post@eateryberlin.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-4">
                        <div className="site-footer__widget">
                            <h5 className="site-footer__widget-title">
                                Services
                            </h5>
                            <nav className="site-footer__nav">
                                <NavLink to="/services/food-photographer-and-product-photographer">
                                    Food photography
                                </NavLink>
                                <NavLink to="/services/video-production">
                                    Video production
                                </NavLink>
                                <NavLink to="/services/recipe-creation">
                                    Recipe Creation
                                </NavLink>
                                <NavLink to="/services/food-stylist">
                                    Food stylist
                                </NavLink>
                                <NavLink to="/services/collaboration">
                                    Collaboration
                                </NavLink>
                                <NavLink to="/services/cooking-classes">
                                    Cooking Classes
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-4">
                        <div className="site-footer__widget">
                            <h5 className="site-footer__widget-title">Legal</h5>
                            <nav className="site-footer__nav">
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-4">
                        <div className="site-footer__widget">
                            <h5 className="site-footer__widget-title">
                                Social Media
                            </h5>
                            <nav className="site-footer__nav">
                                <a href="#" target="_blank">
                                    Facebook
                                </a>
                                <a href="#" target="_blank">
                                    Instagram
                                </a>
                                <a href="#" target="_blank">
                                    Twitter
                                </a>
                                <a href="#" target="_blank">
                                    Youtube
                                </a>
                                <a href="#" target="_blank">
                                    Linkedin
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
