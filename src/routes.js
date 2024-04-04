import {createBrowserRouter} from "react-router-dom"
import Body from "./Component/Body";
import Browse from "./Component/Browse";
import Login from "./Component/Login";
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>

    },
    {
        path:"/browse",
        element:<Browse/>

    }
])
export default appRouter;