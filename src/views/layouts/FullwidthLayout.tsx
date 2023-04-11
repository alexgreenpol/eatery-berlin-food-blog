import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logo from "../assets/images/logo.svg";

type FullwidthLayoutProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

const FullwidthLayout: FC<FullwidthLayoutProps> = ({ children, className }) => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Header />
            <main className={cn("page", className)}>
                <aside className="left-menu">
                    <img src={Logo} alt="" className="left-menu__logo" />
                </aside>
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default FullwidthLayout;
