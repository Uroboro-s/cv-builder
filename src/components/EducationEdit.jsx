/* eslint-disable react/prop-types */

import { useState } from "react"
import '../styles/education.css'

function DegreeComponent({details, updateDetails, index}) {
    // console.log(index);
    // console.log(details);
    
    return (
        <>
            <div className={"degree"+index}>
                <h2>{details.education[index].degree}</h2>
                        <label htmlFor='institute-name' >Institute Name:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'institute-name'
                            id="institute-name"
                            value={details.education[index].institute}
                            onChange={(event) => {let newObj = {...details}; newObj.education[index].institute = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="email">Degree:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'institute-degree'
                            id="institute-degree"
                            value={details.education[index].degree}
                            onChange={(event) => {let newObj = {...details}; newObj.education[index].degree = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="number">Start Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'start-date'
                            id="start-date"
                            value={details.education[index].startDate}
                            onChange={(event) => {let newObj = {...details}; newObj.education[index].startDate = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="number">End Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'start-date'
                            id="start-date"
                            value={details.education[index].endDate}
                            onChange={(event) => {let newObj = {...details}; newObj.education[index].endDate = event.target.value; updateDetails(newObj)}}
                        />
            </div>
        </>
    )
}

export default function EducationEdit({details, updateDetails}) {

    const [degreeCount, setDegreeCount] = useState(1);
    //console.log(degreeCount);
    const increaseDegreeCount = () => {
        const degreeObj = {institute: "",
            degree: "",
            startDate: "",
            endDate: ""};
        let newObj = {...details};
        newObj.education.push(degreeObj);
        updateDetails(newObj);
        setDegreeCount(degreeCount+1);
    }
    
    const isButtonVisible = () => {
        if(degreeCount <= 3){
            
            return (
                <button type="button" onClick={increaseDegreeCount}>+</button>
            )
        }
        else 
            return null;
    }

    return (
        <>
            <h2>Education</h2>
            <section className="education-detail-section">
                
                {
                details.education.map((somevar, index) =>{
                    return (<DegreeComponent
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

