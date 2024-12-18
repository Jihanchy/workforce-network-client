import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const {user} = useAuth()
    const submitApplicationForm = e => {
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn,github,resume)

        const applications = {
            job_id: id,
            applicant_email:user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:5000/job-applications',applications)
        .then(data => {
            if(data.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-8/12 mx-auto shadow-2xl">
            <h2 className='text-center text-4xl font-semibold m-5'>Application form</h2>
                <form onSubmit={submitApplicationForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Linked in URL</span>
                        </label>
                        <input type="url" name='linkedIn' placeholder="linkedIn" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;