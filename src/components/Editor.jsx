/* eslint-disable react/prop-types */

//import { useState } from "react";

function Editor({details, toggleFunction, updateDetails}) {

    //const [value, setValue] = useState('');
    //console.log(details);

    return (
        <>
            <form>
                <section className = "personal-detail-section"> 
                    <h2>Personal Details</h2>
                    <label htmlFor='name' >Name:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'person-name'
                        id="person-name"
                        value={details.name}
                        onChange={(event) => updateDetails({...details , name: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type='email'
                        name = 'person-email'
                        id="person-email"
                        value={details.email}
                        onChange={(event) => updateDetails({...details , email: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">Phone Number:</label>
                    <br/>
                    <input
                        type='tel'
                        name = 'person-number'
                        id="person-number"
                        value={details.number}
                        onChange={(event) => updateDetails({...details , number: event.target.value})}
                    />
                </section>

                <section className="education-detail-section">
                    <h2>Education</h2>
                    <label htmlFor='institute-name' >Institute Name:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'institute-name'
                        id="institute-name"
                        value={details.institute}
                        onChange={(event) => updateDetails({...details , institute: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="email">Degree:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'institute-degree'
                        id="institute-degree"
                        value={details.degree}
                        onChange={(event) => updateDetails({...details , degree: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">Start Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'start-date'
                        id="start-date"
                        value={details.startDate}
                        onChange={(event) => updateDetails({...details , startDate: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">End Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'start-date'
                        id="start-date"
                        value={details.endDate}
                        onChange={(event) => updateDetails({...details , endDate: event.target.value})}
                    />
                </section>
                
                <section className="professional-detail-section">
                    <h2>Experience</h2>
                    <label htmlFor='institute-name' >Company:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'company-name'
                        id="company-name"
                        value={details.company}
                        onChange={(event) => updateDetails({...details , company: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="email">Position:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'position'
                        id="position"
                        value={details.position}
                        onChange={(event) => updateDetails({...details , position: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="email">Role:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'role'
                        id="role"
                        value={details.role}
                        onChange={(event) => updateDetails({...details , role: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">Start Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'start-date-job'
                        id="start-date-job"
                        value={details.startDateJob}
                        onChange={(event) => updateDetails({...details , startDateJob: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">End Date:</label>
                    <br/>
                    <input
                        type='date'
                        name = 'end-date-job'
                        id="end-date-job"
                        value={details.endDateJob}
                        onChange={(event) => updateDetails({...details , endDateJob: event.target.value})}
                    />
                </section>

                <button 
                    type="button"
                    onClick={() =>{toggleFunction()}}> 
                    Submit
                </button>    
            </form>
        </>
    )
}

export default Editor;