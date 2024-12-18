import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const applications = useLoaderData()
    const handleApplicationStatus = (e, id) => {
        // console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }

        fetch(`https://workforce-network-server.vercel.app/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "applier status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Applications for this job : {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{application.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        onChange={(e) => handleApplicationStatus(e, application._id)}
                                        defaultValue={application.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled >Change Status</option>
                                        <option>Under review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplication;