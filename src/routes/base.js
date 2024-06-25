import { createBrowserRouter } from "react-router-dom"
import Rootlayout from "../layout/Rootlayout"
import { PATHS } from "./paths"
import Home from "../pages/Home"
import Rooms from "../pages/Rooms"
import Contact from "../pages/Contact"

export const routes = createBrowserRouter([
    {
        element: <Rootlayout />,
        children: [
            {
                path: PATHS.HOME,
                element: <Home />
            },
            {
                path: PATHS.ROOMS,
                element: <Rooms />
            },
            {
                path: PATHS.CONTACT,
                element: <Contact />
            }
            //other routes
        ]
    }
])