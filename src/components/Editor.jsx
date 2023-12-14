/* eslint-disable react/prop-types */
//to handle props validation

import PersonalDetailsEdit from "./PersonalDetailsEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";
//import { useState } from "react";

function Editor({details, toggleFunction, updateDetails}) {

    //const [value, setValue] = useState('');
    console.log(details);
    //console.log(updateDetails);
    return (
        <>
            <form>
                
                {<PersonalDetailsEdit
                    details = {details}
                    updateDetails = {updateDetails}
                />}



                
                {<EducationEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }
                
                {<ExperienceEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }
                {/* <section className="professional-detail-section">
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
                </section> */}

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