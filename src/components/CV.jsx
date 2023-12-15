/* eslint-disable react/prop-types */

//import { useState } from "react";
import PersonalDetails from "./PersonalDetailsDisplay";
import Education from "./EducationDisplay";
import Experience from "./ExperienceDisplay";

function CVDisplay({details, toggleFunction}) {
    //console.log("control is here");
    //console.log(toggleFunction);
    console.log(details);
    return (
        <>
            <div className="cv">
                <PersonalDetails
                    details={details}/>
                
                <Education
                    details={details}/>

                <Experience
                    details={details}/>
                
            </div>
            <button 
                    type="button"
                    onClick={toggleFunction}> 
                    Back to editor
                </button>    
        </>
    )
}

export default CVDisplay;