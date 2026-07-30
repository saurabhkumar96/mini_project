import {createBrowserRouter} from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/product/:id",
        element: <h1>Product</h1>
    }
])