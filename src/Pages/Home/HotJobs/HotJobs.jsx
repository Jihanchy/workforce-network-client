import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('https://workforce-network-server.vercel.app/jobs')
        .then(data => setJobs(data.data))
    }, [])
    return (
        <div className='py-20'>
            <h2 className='text-center text-4xl font-bold'><span className='text-blue-500'>Jobs</span> of the Day</h2>
            <p className='text-center text-lg mt-2'>Search and connect with the right candidates faster.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
                {
                    jobs.map((job,index)=> <JobCard key={index} job={job}/>)
                }
            </div>
        </div>
    );
};

export default HotJobs;