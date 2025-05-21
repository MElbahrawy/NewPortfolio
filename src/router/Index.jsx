import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "resume",
                element: <ResumePage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "portfolio",
                element: <PortfolioPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;
