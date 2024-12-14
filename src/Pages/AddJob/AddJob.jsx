import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth()

    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { max, min, currency, ...newJob } = initialData
        newJob.salaryRange = { max, min, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-9/12 mx-auto shadow-2xl">
                <h2 className='text-center text-4xl font-semibold m-5'>Add job</h2>
                {/* form */}
                <form onSubmit={handleAddJob} className="card-body">

                    {/* row-1 */}
                    <div className='flex gap-5'>
                        {/* title */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                        </div>
                        {/* job location */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Location</span>
                            </label>
                            <input type="text" name='location' placeholder="Job location" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-2 */}
                    <div className='flex gap-5'>
                        {/* job-type */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <select required defaultValue="Pick a job type" name='jobType' className="select select-bordered w-full">
                                <option disabled >Pick a job type</option>
                                <option>Hybrid</option>
                                <option>Remote</option>
                                <option>Part-time</option>
                                <option>Full-time</option>
                                <option>Intern</option>
                            </select>
                        </div>
                        {/* job category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Field</span>
                            </label>
                            <select required defaultValue="Pick a job category" name='category' className="select select-bordered w-full">
                                <option disabled >Pick a job category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                                <option>Development</option>
                            </select>
                        </div>
                    </div>

                    {/* row-3 */}
                    <div className='grid grid-cols-1 md:grid-cols-3 items-end gap-4'>
                        {/* salary range */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type="number" name='min' placeholder="min" className="input input-bordered" required />
                        </div>
                        {/* max */}
                        <div className="form-control w-full">
                            <input type="number" name='max' placeholder="max" className="input input-bordered" required />
                        </div>
                        {/* currency */}
                        <div className="form-control w-full">
                            <select required defaultValue="Pick a currency" name='currency' className="select select-bordered w-full max-w-xs">
                                <option disabled >Pick a currency</option>
                                <option>BDT</option>
                                <option>INR</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>

                    {/* row-4 */}
                    <div className='flex gap-5'>
                        {/* title */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company</span>
                            </label>
                            <input type="text" name='company' placeholder="company name" className="input input-bordered" required />
                        </div>
                        {/* company logo*/}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company logo</span>
                            </label>
                            <input type="url" name='company_logo' placeholder="logo URL" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-5 */}
                    {/* job description */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea required name='description' className="textarea textarea-bordered" placeholder="Job description"></textarea>
                    </div>

                    {/* row-6 */}
                    {/* j0b requirements */}
                    <div className='flex gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Requirements</span>
                            </label>
                            <textarea required name='requirements' className="textarea textarea-bordered" placeholder="put each requirements in a new line"></textarea>
                        </div>
                        {/* j0b responsibilities */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job responsibilities</span>
                            </label>
                            <textarea required name='responsibilities' className="textarea textarea-bordered" placeholder="write each responsibilities in a new line"></textarea>
                        </div>
                    </div>

                    {/* row-7 */}
                    <div className='grid grid-cols-1 md:grid-cols-3 items-end gap-4'>
                        {/* HR Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">HR Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={user?.displayName} name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                        </div>
                        {/* HR Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">HR Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                        </div>
                        {/* Application Deadline */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <input type="date" name='applicationDeadline' placeholder="HR Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
