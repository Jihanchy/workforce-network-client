import React from 'react';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { category,_id, hr_name, title, salaryRange, requirements, location, company_logo, company, jobType, description } = job
    return (
        <motion.div
        animate={{}}
        whileHover={{backgroundColor:'white'}}
        className="card bg-gray-50 rounded-md shadow-sm border-2 p-3">
            <div className='flex items-center gap-2'>
                <figure className="">
                    <img
                        src={company_logo}
                        alt="Shoes"
                        className="rounded-xl w-16 border-2 p-0" />
                </figure>
                <div>
                    <h3 className='text-xl font-semibold'>{company}</h3>
                    <p className='flex items-center gap-1 text-gray-400'><span><CiLocationOn /></span>{location}</p>
                </div>
            </div>
            <div className="card-body pt-1 px-0 pb-0">
                <h2 className="card-title">{title}</h2>
                <p className='flex items-center gap-1 text-gray-400'><span><BiSolidShoppingBags /></span>{jobType}</p>
                <p className='text-gray-500'>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((recruit, idx) => <p className='px-2 py-1 rounded-sm text-gray-400 text-center bg-gray-100' key={idx}>{recruit}</p>)
                    }
                </div>
                <div className="card-actions flex items-center">
                    <p className='flex items-center md:text-xl md:font-semibold gap-1'>
                        <span className='text-blue-500 flex items-center'>
                            <FaDollarSign />{salaryRange.min}-{salaryRange.max}
                        </span>
                        {salaryRange.currency}
                    </p>
                    <Link to={`/jobDetail/${_id}`}><button className="btn btn-primary px-2 rounded-md">Apply Now</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;