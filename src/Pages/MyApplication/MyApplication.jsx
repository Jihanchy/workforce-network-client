import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        // axios.get(`https://workforce-network-server.vercel.app/job-applications?email=${user.email}`, { withCredentials: true })
        //     .then(data => setJobs(data.data))

        axiosSecure.get(`/job-applications?email=${user.email}`)
        .then(res => setJobs(res.data))
    }, [user.email])
    
    return (
        <div>
            <h2>My Applications : {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyApplication;