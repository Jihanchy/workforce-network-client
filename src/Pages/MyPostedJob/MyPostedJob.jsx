import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`https://workforce-network-server.vercel.app/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-5'>My Posted Job {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>DeadLine</th>
                            <th>Application Count</th>
                            <th>Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className='btn btn-link'>
                                            View Applications
                                        </button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;