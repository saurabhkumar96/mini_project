import { createBrowserRouter } from "react-router";
import Home from "./features/auth/components/Home";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <div>About</div>
    }
])