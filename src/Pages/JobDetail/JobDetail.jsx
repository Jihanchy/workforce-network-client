import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiSolidBadgeDollar, BiSolidShoppingBags } from 'react-icons/bi';
import { LiaIndustrySolid } from 'react-icons/lia';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const { category, _id, hr_name, applicationDeadline, title, salaryRange, responsibilities, requirements, location, company_logo, company, jobType, description } = useLoaderData()
    return (
        <div className=''>
            <div className='bg-jobDetailBanner rounded-md py-32 bg-cover bg-center bg-blend-overlay bg-zinc-500'>
                <h2 className='text-5xl font-bold text-white text-center'>Job Detail</h2>
            </div>
            <div className='pt-5 flex items-center justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-4xl font-semibold'>{title}</h2>
                    <p className='px-6 py-5 text-center text-xl badge bg-slate-50 rounded-md'>{category}</p>
                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button
                        className='btn flex items-center gap-3 bg-blue-500 text-white text-xl font-semibold px-7'>
                        <span><AiOutlineCheckCircle /></span>
                        Apply
                    </button>
                </Link>
            </div>
            <div className='divider'></div>
            <div className='grid grid-cols-1 items-center md:grid-cols-2 p-4 shadow-md gap-20 w-9/12 mx-auto'>
                <div>
                    <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><LiaIndustrySolid className='text-xl' />
                            <span className='text-xl font-semibold'>Company </span></h2>
                        <p>{company}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidBadgeDollar className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Salary </span></h2>
                        <p>{salaryRange.min}-{salaryRange.max}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidShoppingBags className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Job Type </span></h2>
                        <p>{jobType}</p>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidShoppingBags className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Job Level </span></h2>
                        <div className='flex flex-wrap'>
                            {
                                responsibilities.map((res, idx) => <span key={idx}>{res}</span>)
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><LiaIndustrySolid className='text-xl' />
                            <span className='text-xl font-semibold'>Company </span></h2>
                        <p>{company}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidBadgeDollar className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Deadline </span></h2>
                        <p>{applicationDeadline}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidShoppingBags className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Location </span></h2>
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidShoppingBags className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Experience </span></h2>
                        <div className='flex flex-wrap'>
                            {
                                requirements.map((res, idx) => <span key={idx}>{res}</span>)
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='flex items-center gap-3'><BiSolidShoppingBags className='text-xl' />
                            <span className='text-xl font-semibold mr-9'>Details </span></h2>
                        <div className=''>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;