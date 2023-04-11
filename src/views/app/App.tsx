import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import SinglePostPage from "../pages/SinglePostPage";
import StoriesPage from "../pages/StoriesPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
        {
            path: "/stories",
            element: <StoriesPage />,
        },
        {
            path: "/stories/:slug",
            element: <SinglePostPage />,
        },
        {
            path: "/services",
            element: <ServicesPage />,
        },
        {
            path: "/services/:slug",
            element: <SinglePostPage />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
