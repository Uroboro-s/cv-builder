/* eslint-disable react/prop-types */

//import { useState } from "react";

function SkillComponent({details, index, updateDetails}) {
    
    //console.log(details.skills);

    return (
        <>
            <div className={"skill"+index}>

                <br/>
                <input
                    type='text'
                    name = 'skill'
                    className="skill-input"
                    value={details.skills[index]}
                    onChange={(event) => {
                        let newObj = {...details};
                        newObj.skills[index] = event.target.value;
                        updateDetails(newObj);}}
                />

            </div>
        </>
    )
}


function SkillEdit({details, updateDetails}) {
    
    const increaseDegreeCount = () => {
        const newSkill = "";
        let newObj = {...details};
        newObj.skills.push(newSkill);
        updateDetails(newObj);

    }
    
    const isButtonVisible = () => {
        let count =0;
        details.skills.forEach(() => {
            count++;
        });
        if(count <= 3){
            return (
                <button type="button" onClick={increaseDegreeCount}>+</button>
            )
        }
        else 
            return null;
    }
    
    return (
        <>
            <h2>Skills:</h2>
            <section className="skills-section">
                {
                    details.skills.map((somevar, index) =>{
                        return (
                            <SkillComponent
                                details={details}
                                updateDetails={updateDetails}
                                index={index}
                                key={index}
                            />
                        )
                    })
                }
            </section>
            {isButtonVisible()}
        </>
    )
}

export default SkillEdit;