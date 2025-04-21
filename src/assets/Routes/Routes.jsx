import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/HomePage/Home";
import MenuPage from "../Layout/MenuPage/MenuPage";
import OrderPage from "../Layout/OrderPage/OrderPage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <MenuPage></MenuPage>
            },
            {
                path: "/order/:category",
                element: <OrderPage></OrderPage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
        ]
    }
])


export default router;