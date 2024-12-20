import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: 'https://workforce-network-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {

    const {logout} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            if (error.status === 401 || error.status === 403) {
                // console.log('need to logout the user')
                logout()
                .then(()=>{
                    // console.log('logged out user')
                    navigate('/login')
                })
                .catch(err => {
                    // console.log(err)
                })
            }
            // console.log('error caught in interceptors', error)
            return Promise.reject(error)
        })
    }, [])


    return axiosInstance
};

export default useAxiosSecure;