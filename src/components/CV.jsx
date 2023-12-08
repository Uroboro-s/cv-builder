/* eslint-disable react/prop-types */

//import { useState } from "react";

function CVDisplay({details, toggleFunction}) {
    //console.log("control is here");
    //console.log(toggleFunction);
    console.log(details);
    return (
        <>
            <div>
                <p>{details.name}</p>
                <hr />
                <p>{details.email}</p>
                <hr />
                <p>{details.number}</p>
                <hr />
                <p>{details.institute}</p>
                <hr />
                <p>{details.degree}</p>
                <hr />
                <p>{details.startDate}</p>
                <hr />
                <p>{details.endDate}</p>
                <hr />
                <p>{details.company}</p>
                <hr />
                <p>{details.position}</p>
                <hr />
                <p>{details.role}</p>
                <hr />
                <p>{details.startDateJob}</p>
                <hr />
                <p>{details.endDateJob}</p>
                <hr />
                
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