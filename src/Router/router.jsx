import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {   
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/dashboard',
                element: <h2>This is dashboard</h2>
            }
        ]
    }
])

export default router;