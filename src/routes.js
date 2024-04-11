import {createBrowserRouter} from "react-router-dom"
import Browse from "./Component/Browse";
import Login from "./Component/Login";
import Body from "./Component/Body";
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>

    },
    {
        path:"/body",
        element:<Body/>
    },
    {
        path:"/browse",
        element:<Browse/>

    }
])
export default appRouter;