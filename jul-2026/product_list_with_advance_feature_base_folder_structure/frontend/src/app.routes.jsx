import { createBrowserRouter } from "react-router";
import Home from "./features/productList/pages/Home";
import Product from "./features/productList/pages/Product";
import CreateUpdateDelete from "./features/productList/pages/CreateUpdateDelete";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/:id",
        element: <Product />
    },
    {
        path: "/createUpdateDelete",
        element: <CreateUpdateDelete />
    }
])