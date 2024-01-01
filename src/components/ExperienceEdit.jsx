/* eslint-disable react/prop-types */

import { useState } from "react";
import '../styles/experience.css'

function WorkComponent({details, updateDetails, index}) {
    // console.log(index);
    // console.log(details);

    return (
        <>
            <div className={"job"+index}>
                <h2>{details.experience[index].position}</h2>
                <label htmlFor='company-name' >Company:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'company-name'
                        id="company-name"
                        value={details.experience[index].company}
                        onChange={(event) => {let newObj = {...details}; newObj.experience[index].company = event.target.value; updateDetails(newObj)}}
                    />
                    <br/>
                    <label htmlFor="email">Position:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'position'
                        className="position"
                        value={details.experience[index].position}
                        onChange={(event) => {let newObj = {...details}; newObj.experience[index].position = event.target.value; updateDetails(newObj)}}
                    />
                    <br/>
                    <label htmlFor="email">Role:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'role'
                        className="role"
                        value={details.experience[index].role}
                        onChange={(event) => {let newObj = {...details}; newObj.experience[index].role = event.target.value; updateDetails(newObj)}}
                    />
                    <br/>
                    <label htmlFor="number">Start Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'start-date-job'
                        className="start-date-job"
                        value={details.experience[index].startDateJob}
                        onChange={(event) => {let newObj = {...details}; newObj.experience[index].startDateJob = event.target.value; updateDetails(newObj)}}
                    />
                    <br/>
                    <label htmlFor="number">End Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'end-date-job'
                        className="end-date-job"
                        value={details.experience[index].endDateJob}
                        onChange={(event) => {let newObj = {...details}; newObj.experience[index].endDateJob = event.target.value; updateDetails(newObj)}}
                    />
            </div>
        </>
    )
}

export default function ExperienceEdit({details, updateDetails}) {
    const [jobCount, setJobCount] = useState(1);

    const increaseJobCount = () => {
        const jobObj = {
            company: "",
            position: "",
            role: "",
            startDateJob: "",
            endDateJob: "",
        };
        let newObj = {...details};
        newObj.experience.push(jobObj);
        updateDetails(newObj);
        setJobCount(jobCount+1);
    }

    const isButtonVisible = () => {
        if(jobCount <= 3){

            return (
                <button type="button" onClick={increaseJobCount}>+</button>
            )
        }
        else 
            return null;
    }

    return (
        <>
            <h2>Experience</h2>
            <section className="professional-detail-section">
                    {
                        details.experience.map((somevar, index) => {
                            return (<WorkComponent
                                details={details}
                                updateDetails={updateDetails}
                                index={index}
                                key={index}/>)
                        })
                    }
                    
                </section>
                {isButtonVisible()}
        </>
    )
}
