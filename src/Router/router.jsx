import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetail from "../Pages/JobDetail/JobDetail";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/Addjob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

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
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/jobDetail/:id',
                element:<PrivateRoute><JobDetail/></PrivateRoute>,
                loader:({params})=>fetch(`https://workforce-network-server.vercel.app/jobs/${params.id}`)
            },
            {
                path:'/jobApply/:id',
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path:'/myApplications',
                element:<PrivateRoute><MyApplication/></PrivateRoute>
            },
            {
                path:'/addJob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/myPostedJob',
                element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path:'/viewApplications/:job_id',
                element:<PrivateRoute><ViewApplication/></PrivateRoute>,
                loader:({params})=>fetch(`https://localhost:5000/job-applications/jobs/${params.job_id}`)
            },
            {
                path:'/dashboard',
                element: <h2>This is dashboard</h2>
            }
        ]
    }
])

export default router;