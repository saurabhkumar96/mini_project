import {createBrowserRouter} from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/:id",
        element: <Product />
    }
])